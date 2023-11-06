import React from 'react';
import { useNavigate } from 'react-router-dom';

const ConfirmPlan = () => {
    const navigate = useNavigate();
    const plan = JSON.parse(localStorage.getItem('selectedPlan') || '{}');

    return (
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="p-6 bg-white rounded-lg shadow-2xl max-w-md w-full text-center">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                    Confirm Your Plan
                </h2>
                <div className="border border-gray-300 p-4 rounded-lg mb-6">
                    <h3 className="text-xl font-semibold text-gray-700">{plan.name}</h3>
                    <p className="text-gray-600 mt-2">${plan.price}</p>
                </div>
                <button
                    onClick={() => navigate('/initiate-checkout')}
                    className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
                >
                    Confirm and Proceed
                </button>
                <button
                    onClick={() => navigate('/plans')}
                    className="w-full mt-4 bg-gray-200 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-300 transition duration-300"
                >
                    Edit Plan
                </button>
            </div>
        </div>
    );
};

export default ConfirmPlan;
