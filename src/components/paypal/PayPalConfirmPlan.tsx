import React from 'react';
import { useNavigate } from 'react-router-dom';

const PayPalConfirmPlan = () => {
    const navigate = useNavigate();
    const plan = JSON.parse(localStorage.getItem('selectedPayPalPlan') || '{}');

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="p-6 bg-white rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-semibold mb-4">Confirm Your PayPal Plan</h2>
                <div className="mb-4 border border-gray-300 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold">{plan.name}</h3>
                    <p className="text-gray-600">{plan.price}</p>
                </div>
                <button
                    onClick={() => navigate('/paypal-initiate-checkout')}
                    className="w-full bg-blue-500 text-white p-2 rounded-lg"
                >
                    Confirm and Proceed
                </button>
            </div>
        </div>
    );
};

export default PayPalConfirmPlan;
