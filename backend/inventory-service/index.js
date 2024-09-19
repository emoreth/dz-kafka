const { Kafka } = require('kafkajs');
const WebSocket = require('ws');
const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

const kafka = new Kafka({
    clientId: 'inventory-service',
    brokers: ['kafka:9092'],
});

const consumer = kafka.consumer({ groupId: 'inventory-group' });

const run = async () => {
    await consumer.connect();
    await consumer.subscribe({ topic: 'order-topic', fromBeginning: true });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const order = JSON.parse(message.value.toString());
            console.log(`Received order: ${order.orderId}`);
            // sendToClients(order); // Send the order to WebSocket clients
        },
    });
};

run().catch(console.error);

const connectConsumer = async () => {
    let connected = false;
    while (!connected) {
        try {
            await consumer.connect();
            console.log('Connected to Kafka');
            connected = true;
        } catch (error) {
            console.error('Error connecting to Kafka. Retrying in 5 seconds...', error);
            await new Promise(resolve => setTimeout(resolve, 5000));
        }
    }
};

// Start HTTP server
server.listen(8080, () => {
    await connectConsumer();
    console.log('Server running on http://localhost:8080');
});
