import React from 'react';

const PayPalSuccess = () => (
    <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="p-6 bg-white rounded-lg shadow-lg max-w-md w-full text-center">
            <h2 className="text-2xl font-semibold mb-4">PayPal Payment Successful!</h2>
            <p className="text-gray-600">Thank you for your subscription.</p>
        </div>
    </div>
);

export default PayPalSuccess;
