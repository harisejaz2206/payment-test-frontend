import React, { useState } from 'react';
import { FaCreditCard, FaCalendarAlt, FaLock } from 'react-icons/fa';
import {
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";
import axios from 'axios'; // Import Axios



const Stripe = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [isSubscribing, setIsSubscribing] = useState(false);

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        try {
            if (isSubscribing) {
                // Create a subscription with the selected product
                const { paymentMethod, error } = await stripe.createPaymentMethod({
                    type: 'card',
                    card: elements.getElement(CardNumberElement)!,
                    billing_details: {
                        // You can add billing details here if needed.
                    },
                });

                if (error) {
                    console.error("Error creating payment method:", error.message);
                } else {
                    console.log("Success creating payment method:", paymentMethod);

                    // Create a subscription
                    const response = await axios.post('http://localhost:7979/payment/process-stripe-subscription', {
                        paymentMethodId: paymentMethod.id,
                        priceId: 'price_1NrbFIFUtqiloGGL8XD2sMT0',
                        customer: 'cus_Oew2Yue8lyGUbY',
                    });

                    const responseData = response.data;
                    console.log('Subscription created:', responseData);
                }
            } else {
                if (!stripe || !elements) {
                    // Stripe.js has not yet loaded.
                    return;
                }
                try {
                    // Create a PaymentMethod object using the Elements container.
                    const { paymentMethod, error } = await stripe.createPaymentMethod({
                        type: 'card',
                        card: elements.getElement(CardNumberElement)!,
                        billing_details: {
                            // You can add billing details here if needed.
                        },
                    });

                    if (error) {
                        console.log("error", error.message);
                    } else {
                        console.log("success", { paymentMethod });
                        const response = await axios.post('http://localhost:7979/payment/process-paypal-payment', {
                            paymentMethodId: paymentMethod.id,
                            amount: 10,
                            description: "The payment is $10",
                        });

                        const responseData = response.data;
                        console.log('Backend response:', responseData);
                    }
                } catch (error) {
                    // Handle unexpected errors, e.g., network errors or server issues.
                    console.error('Error processing payment:', error);
                }
            }
        } catch (error) {
            console.error('Error processing payment:', error);
        }
    };

    const toggleSubscription = () => {
        setIsSubscribing(!isSubscribing);
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <form onSubmit={handleSubmit}>
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-10 rounded-lg shadow-lg">
                    <div className="text-white text-center">
                        <h2 className="text-3xl font-semibold mb-6">Pay with Stripe</h2>
                    </div>
                    <div className="mb-6">
                        <label className="block text-white text-sm font-semibold mb-2" htmlFor="cardNumber">
                            <span className="flex items-center">
                                <FaCreditCard className="mr-2" />
                                Card Number
                            </span>
                        </label>
                        <div className="bg-white bg-opacity-25 rounded-full py-2 px-3 text-white text-opacity-90 leading-tight focus:outline-none focus:shadow-outline">
                            <CardNumberElement />
                        </div>
                    </div>
                    <div className="mb-6 flex justify-between">
                        <div className="w-1/2 mr-2">
                            <label className="block text-white text-sm font-semibold mb-2" htmlFor="expiryDate">
                                <span className="flex items-center">
                                    <FaCalendarAlt className="mr-2" />
                                    Expiry Date
                                </span>
                            </label>
                            <div className="bg-white bg-opacity-25 rounded-full py-2 px-3 text-white text-opacity-90 leading-tight focus:outline-none focus:shadow-outline">
                                <CardExpiryElement />
                            </div>
                        </div>
                        <div className="w-1/2 ml-2">
                            <label className="block text-white text-sm font-semibold mb-2" htmlFor="cvv">
                                <span className="flex items-center">
                                    <FaLock className="mr-2" />
                                    CVV
                                </span>
                            </label>
                            <div className="bg-white bg-opacity-25 rounded-full py-2 px-3 text-white text-opacity-90 leading-tight focus:outline-none focus:shadow-outline">
                                <CardCvcElement className=' text-white' />
                            </div>
                        </div>
                    </div>
                    {/* <div className="flex justify-center">
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-semibold py-2 px-6 rounded-full mr-4">
                            Pay Now
                        </button>
                        <button className="bg-white text-gray-600 hover:bg-gray-300 font-semibold py-2 px-6 rounded-full">
                            Cancel
                        </button>
                    </div> */}
                    <div className="mb-6">
                        <label className="block text-white text-sm font-semibold mb-2">
                            <input
                                type="checkbox"
                                checked={isSubscribing}
                                onChange={toggleSubscription}
                                className="mr-2"
                            />
                            Subscribe for $999/month (Recurring)
                        </label>
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-semibold py-2 px-6 rounded-full mr-4"
                        >
                            {isSubscribing ? 'Subscribe Now' : 'Pay Now'}
                        </button>
                        <button
                            className="bg-white text-gray-600 hover:bg-gray-300 font-semibold py-2 px-6 rounded-full"
                            type="button"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Stripe;
