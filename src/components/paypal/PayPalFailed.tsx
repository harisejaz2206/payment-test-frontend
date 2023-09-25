import React from 'react';
import { useNavigate } from 'react-router-dom';

const PayPalFailed = () => {
    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="p-6 bg-white rounded-lg shadow-lg max-w-md w-full text-center">
                <h2 className="text-2xl font-semibold mb-4">PayPal Payment Failed</h2>
                <p className="text-gray-600 mb-4">Oops! Something went wrong.</p>
                <button
                    onClick={() => navigate('/paypal-plans')}
                    className="w-full bg-blue-500 text-white p-2 rounded-lg"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
};

export default PayPalFailed;
