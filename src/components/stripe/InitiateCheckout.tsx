import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { HashLoader } from 'react-spinners';

const InitiateCheckout = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const initiateStripeCheckout = async () => {
            try {
                const storedPlan = localStorage.getItem('selectedPlan');
                console.log("storedPlan", storedPlan);
                const plan = storedPlan ? JSON.parse(storedPlan) : null;

                if (!plan) {
                    navigate('/plans');
                    return;
                }

                const response = await axios.post('http://localhost:7979/checkout-session/initiate-checkout', {
                    planId: plan.id
                });

                const sessionId = response.data.payload.sessionId;
                console.log("sessionId", sessionId);
                console.log("REACT_APP_STRIPE_PUBLIC_KEY", process.env.REACT_APP_STRIPE_PUBLIC_KEY);
                const publicKey = "pk_test_51NqDB7FUtqiloGGLtEWyVRgvWcwHw3JV21EB9FRIudrkCSPMCiJJRAImyKuZ45dcGpy3N6ZYkNBgpBiORto2IrA900R4CNW06K";

                // Redirect to Stripe Checkout using the session ID
                const stripe = window.Stripe!(publicKey);
                const result = await stripe.redirectToCheckout({
                    sessionId,
                });

                if (result.error) {
                    navigate('/failed');
                }
            } catch (error) {
                navigate('/failed');
            } finally {
                setLoading(false);
            }
        };

        initiateStripeCheckout();
    }, [navigate]);

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="p-6 bg-white rounded-lg shadow-lg max-w-md w-full text-center">
                <h2 className="text-2xl font-semibold mb-4">Initiating Checkout...</h2>
                <div className="flex justify-center">
                    <HashLoader
                        size={50}
                        color={'black'}
                        className='mt-2'
                        loading={loading}
                    />
                </div>
                {!loading && (
                    <p className="text-gray-600 mt-4">Please wait while we prepare your checkout session.</p>
                )}
            </div>
        </div>
    );
};

export default InitiateCheckout;
