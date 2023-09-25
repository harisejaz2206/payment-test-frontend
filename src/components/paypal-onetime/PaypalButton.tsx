import React, { useState } from 'react';
import axios from 'axios';

const PaypalOneTimeButton = () => {
    const [amount, setAmount] = useState(0);
    const [loading, setLoading] = useState(false);

    const handlePaypalPayment = async () => {
        setLoading(true);
        try {
            // Replace with your actual backend endpoint
            const { data } = await axios.post('http://localhost:7979/payment/process-paypal-payment', { amount });
            console.log(data);
            // Redirect to PayPal approval URL
            window.location.href = data.url;
        } catch (error) {
            setLoading(false);
            alert('Something went wrong, please try again.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="p-6 w-64 rounded-lg shadow-lg bg-white">
                <h2 className="text-2xl font-semibold mb-4">Pay with PayPal</h2>
                <input
                    type="number"
                    placeholder="Amount in USD"
                    className="border p-2 rounded w-full mb-4"
                    onChange={(e) => setAmount(Number(e.target.value))}
                    value={amount}
                />
                <button
                    className={`w-full p-2 rounded bg-blue-500 text-white ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
                        }`}
                    disabled={loading}
                    onClick={handlePaypalPayment}
                >
                    {loading ? 'Processing...' : 'Pay Now'}
                </button>
            </div>
        </div>
    );
};

export default PaypalOneTimeButton;
