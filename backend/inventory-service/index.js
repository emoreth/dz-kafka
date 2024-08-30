const { Kafka } = require('kafkajs');
const WebSocket = require('ws');
const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);
// const wss = new WebSocket.Server({ server });

const kafka = new Kafka({
    clientId: 'inventory-service',
    brokers: ['kafka:9092'],
});

const consumer = kafka.consumer({ groupId: 'inventory-group' });

// WebSocket setup
// wss.on('connection', ws => {
//     console.log('Client connected');
//     ws.on('message', message => {
//         console.log(`Received message => ${message}`);
//     });
// });

// const sendToClients = (order) => {
//     wss.clients.forEach(client => {
//         if (client.readyState === WebSocket.OPEN) {
//             client.send(JSON.stringify(order));
//         }
//     });
// };

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

// Start HTTP server
server.listen(8080, () => {
    console.log('Server running on http://localhost:8080');
});
