import React, { useEffect, useState } from 'react';

const App = () => {
    const [orders, setOrders] = useState(
        [
            {
                "orderId": "1",
                "productId": "p001",
                "quantity": 3
            },
            {
                "orderId": "2",
                "productId": "p002",
                "quantity": 1
            },
            {
                "orderId": "3",
                "productId": "p003",
                "quantity": 2
            },
            {
                "orderId": "4",
                "productId": "p004",
                "quantity": 5
            },
            {
                "orderId": "5",
                "productId": "p005",
                "quantity": 7
            }
        ]
        
    );

    useEffect(() => {
        const ws = new WebSocket('ws://172.20.73.188:3000');

        ws.onmessage = (event) => {
            const newOrder = JSON.parse(event.data);
            setOrders(prevOrders => [...prevOrders, newOrder]);
        };

        ws.onopen = () => {
            console.log('WebSocket connection opened');
        };

        ws.onclose = () => {
            console.log('WebSocket connection closed');
        };

        return () => {
            ws.close();
        };
    }, []);

    return (
        <div>
            <h1>Order Updates</h1>
            <ul>
                {orders.map(order => (
                    <li key={order.orderId}>
                        Order ID: {order.orderId} - Product ID: {order.productId} - Quantity: {order.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;

