// src/app/serverActions.js

'use server';

export async function handleOrderSubmit(selectedProduct, quantity) {
  if (!selectedProduct) return;
  
  const orderId = `order-${Math.floor(Math.random() * 100000)}`; // Random order ID
  const response = await fetch('http://order-service.dz-kafka.svc.cluster.local:3000/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ orderId, productId: selectedProduct.id, quantity }),
  });

  if (!response.ok) {
    throw new Error('Failed to place order.');
  }

  const data = await response.json();
  return data;
}
