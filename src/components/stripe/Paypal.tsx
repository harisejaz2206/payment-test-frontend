import React, { useState } from 'react';
import { FaPaypal } from 'react-icons/fa';

const PayPal = () => {
    const [amount, setAmount] = useState(0);

    const handlePayNow = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/paypal-payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount }),
            });

            const data = await response.json();

            if (data.url) {
                window.location.href = data.url;
            } else {
                console.error("Payment URL not received");
            }
        } catch (error) {
            console.error("There was an error with the PayPal payment:", error);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <form className="bg-gradient-to-r from-blue-400 to-blue-600 p-10 rounded-lg shadow-lg">
                <div className="text-white text-center">
                    <h2 className="text-3xl font-semibold mb-6">Pay with PayPal</h2>
                </div>
                <div className="mb-6">
                    <label className="block text-white text-sm font-semibold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="bg-white bg-opacity-25 shadow appearance-none border rounded w-full py-2 px-3 text-white text-opacity-90 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="example@example.com"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-white text-sm font-semibold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="bg-white bg-opacity-25 shadow appearance-none border rounded w-full py-2 px-3 text-white text-opacity-90 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="********"
                    />
                </div>
                <div className="flex justify-center mt-6">
                    <FaPaypal className="text-4xl text-white" />
                </div>
                <div className="flex justify-center mt-6">
                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full mr-4"
                        onClick={handlePayNow}>
                        Pay Now
                    </button>
                    <button className="bg-white text-gray-600 hover:bg-gray-300 font-semibold py-2 px-6 rounded-full">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PayPal;