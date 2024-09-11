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

const connectProducer = async () => {
    let connected = false;
    while (!connected) {
        try {
            await producer.connect();
            console.log('Connected to Kafka');
            connected = true;
        } catch (error) {
            console.error('Error connecting to Kafka. Retrying in 5 seconds...', error);
            await new Promise(resolve => setTimeout(resolve, 5000));
        }
    }
};

app.listen(3000, async () => {
    await connectProducer();
    console.log('Order Service listening on port 3000');
});
