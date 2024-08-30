import React, { useState } from 'react';

function App() {
  const [orderId, setOrderId] = useState('');
  const [items, setItems] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://order-service:3000/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ orderId, items }),
    });

    if (response.ok) {
      alert('Order placed successfully!');
    }
  };

  return (
    <div className="App">
      <h1>Place an Order</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Order ID"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Items"
          value={items}
          onChange={(e) => setItems(e.target.value)}
        />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default App;
