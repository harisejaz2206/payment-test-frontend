import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const plans = [
    { id: 'price_1Nrg4DFUtqiloGGLoiVUF3Qc', name: 'Basic', price: '$9.99/month' },
    { id: 'price_1Nrg5hFUtqiloGGLCWbxLJ2l', name: 'Pro', price: '$19.99/month' },
    { id: 'price_1Nrg6SFUtqiloGGLpZIGvHEB', name: 'Premium', price: '$29.99/month' },
];

const currentPlan = plans[1];

const Plans = () => {
    const navigate = useNavigate();


    const selectPlan = (plan: any) => {
        localStorage.setItem('selectedPlan', JSON.stringify(plan));
        navigate('/confirm-plan');
    };

    // const goToBillingPortal = async () => {
    //     try {
    //         const customerId = "cus_Oew2Yue8lyGUbY";

    //         const response = await axios.post("http://localhost:7979/checkout-session/create-portal-session", {
    //             customerId
    //         });
    //         window.location.href = response.data.url;
    //     } catch (error) {
    //         console.error("Failed to create billing portal session:", error);
    //     }
    // };

    const goToBillingPortal = () => {
        // The URL you received from Stripe for the Customer Portal.
        const stripePortalURL = 'https://billing.stripe.com/p/login/test_fZe8yNbD299UbUAbII';

        // Redirect the user to the Stripe Customer Portal.
        window.location.href = stripePortalURL;
    };


    return (
        <div className="flex justify-center items-center h-screen">
            <div className="p-6 max-w-md bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Choose a Plan</h2>
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
            <div className="ml-4">
                <div className="bg-blue-500 text-white px-2 py-1 rounded-full">
                    Current Plan: {currentPlan.name}
                </div>
            </div>
            <button onClick={goToBillingPortal}>Manage Billing</button>

        </div>
    );
};

export default Plans;
