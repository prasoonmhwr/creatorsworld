'use client';

import React from 'react';

interface RazorpayCheckoutProps {
  amount: number;
  currency: string;
  receipt: string;
}

const RazorpayCheckout: React.FC<RazorpayCheckoutProps> = ({ amount, currency, receipt }) => {
  const handlePayment = async () => {
    try {
      const res = await fetch('/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, currency, receipt }),
      });

      const order = await res.json();

      if (order.error) {
        console.error(order.error);
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Use public key here
        amount: order.amount,
        currency: order.currency,
        name: 'Your Company Name',
        description: 'SaaS Subscription Payment',
        order_id: order.id,
        handler: (response: any) => {
          console.log(response);
          alert('Payment Successful');
        },
        prefill: {
          name: 'Customer Name',
          email: 'customer@example.com',
          contact: '9999999999',
        },
        notes: {
          address: 'Customer Address',
        },
        theme: {
          color: '#3399cc',
        },
      };

      const razorpay = new (window as any).Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Error in payment process:', error);
    }
  };

  return <button onClick={handlePayment}>Pay Now</button>;
};

export default RazorpayCheckout;