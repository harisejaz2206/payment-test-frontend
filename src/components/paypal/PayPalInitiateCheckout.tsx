import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PayPalInitiateCheckout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const initiatePayPalCheckout = async () => {
            const storedPlan = localStorage.getItem('selectedPayPalPlan');
            const plan = storedPlan ? JSON.parse(storedPlan) : null;

            if (!plan) {
                navigate('/paypal-plans');
                return;
            }

            try {
                // Call your server to set up the PayPal order
                const response = await axios.post('http://localhost:7979/paypal/create-paypal-order', {
                    planId: plan.id,
                });

                // Based on response, navigate to success or failed page
                if (response.data.success) {
                    navigate('/paypal-success');
                } else {
                    navigate('/paypal-failed');
                }
            } catch (error) {
                navigate('/paypal-failed');
            }
        };

        initiatePayPalCheckout();
    }, [navigate]);

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="p-6 bg-white rounded-lg shadow-lg max-w-md w-full text-center">
                <h2 className="text-2xl font-semibold mb-4">Initiating PayPal Checkout...</h2>
                <p className="text-gray-600">Please wait while we prepare your checkout session.</p>
            </div>
        </div>
    );
};

export default PayPalInitiateCheckout;
