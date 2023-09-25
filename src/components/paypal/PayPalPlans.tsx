import React from 'react';
import { useNavigate } from 'react-router-dom';

const plans = [
    { id: 'paypal_basic', name: 'Basic', price: '$9.99/month' },
    { id: 'paypal_pro', name: 'Pro', price: '$19.99/month' },
    { id: 'paypal_premium', name: 'Premium', price: '$29.99/month' },
];

const PayPalPlans = () => {
    const navigate = useNavigate();

    const selectPlan = (plan: any) => {
        localStorage.setItem('selectedPayPalPlan', JSON.stringify(plan));
        navigate('/paypal-confirm-plan');
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="p-6 max-w-md bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Choose a PayPal Plan</h2>
                <div className="space-y-4">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            onClick={() => selectPlan(plan)}
                            className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 cursor-pointer"
                        >
                            <h3 className="text-xl font-semibold">{plan.name}</h3>
                            <p className="text-gray-600">{plan.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PayPalPlans;
