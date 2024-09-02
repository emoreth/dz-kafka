const express = require('express');
const { Kafka } = require('kafkajs');
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors());

const kafka = new Kafka({
    clientId: 'order-service',
    brokers: ['kafka:9092'],
});

const producer = kafka.producer();

app.post('/order', async (req, res) => {
    console.log("order-service called")
    const { orderId, items } = req.body;

    try {
        await producer.send({
            topic: 'order-topic',
            messages: [
                { value: JSON.stringify({ orderId, items }) },
            ],
        });
        res.status(200).send('Order received and sent to Kafka');
    } catch (error) {
        console.error('Error sending message to Kafka:', error);
        res.status(500).send('Error sending message to Kafka');
    }
});

app.listen(5000, async() => {
    try {
        await producer.connect();
        console.log('Order Service listening on port 3000');
    } catch (error) {
        console.error('Error connecting to Kafka:', error);
    }
});
