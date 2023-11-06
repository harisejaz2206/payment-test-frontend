import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const plans = [
    {
      id: 'price_1Nrg4DFUtqiloGGLoiVUF3Qc',
      name: 'Basic',
      price: '9.99/month',
      description: 'Essential features for small pharmacies',
      features: [
        'Inventory Management',
        'Prescription Processing',
        'Basic Support',
        ],
    },
    { 
        id: 'price_1Nrg5hFUtqiloGGLCWbxLJ2l',
        name: 'Pro',
        price: '19.99/month',
        description: 'Advanced features for medium-sized pharmacies',
        features: [
            'All Basic Plan Features',
            'Advanced Reporting',
            '24/7 Support',
        ],
    },
    { 
        id: 'price_1Nrg6SFUtqiloGGLpZIGvHEB',
        name: 'Premium',
        price: '29.99/month',
        description: 'Comprehensive features for large pharmacies',
        features: [
            'All Pro Plan Features',
            'Customization Options',
            'Priority Support',
      ],
    },
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
        <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl text-gray-800 font-bold text-center mb-8">Pricing and Plans</h2>
          {/* Move "Manage Billing" button to the top right */}
          <button onClick={goToBillingPortal} className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mt-32 mr-10 absolute top-0 right-0 hover:bg-blue-700 transition duration-300 z-10">
                    Manage Billing
                </button>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className="p-6 bg-white border rounded-lg shadow-lg text-center"
                        >
                            <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
                            <p className="text-xl font-bold text-gray-800">${plan.price}</p>
                            <p className="text-gray-600 mb-6">{plan.description}</p>
                            <ul className="text-left space-y-2">
                                {plan.features.map((feature, index) => (
                                <li key={index} className="flex items-center justify-start">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-4 h-4 inline-block mr-2 text-blue-600"
                                    >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                    </svg>
                                    {feature}
                                </li>
                                ))}
                            </ul>
                            <button  onClick={() => selectPlan(plan)} className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mt-6 hover:bg-blue-700 transition duration-300">
                              Select Plan
                            </button>
                        </div>
                    ))}
                </div>
        
        {/* Plan Comparison Table */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Plan Comparison</h3>
          <div className="bg-white border rounded-lg shadow-lg">
            <table className="w-full">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-3 text-left px-6">Feature</th>
                  <th className="py-3 text-center px-6">Basic Plan</th>
                  <th className="py-3 text-center px-6">Pro Plan</th>
                  <th className="py-3 text-center px-6">Enterprise Plan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-6">Inventory Management</td>
                  <td className="py-3 text-center px-6">✓</td>
                  <td className="py-3 text-center px-6">✓</td>
                  <td className="py-3 text-center px-6">✓</td>
                </tr>
                <tr>
                  <td className="py-3 px-6">Prescription Processing</td>
                  <td className="py-3 text-center px-6">✓</td>
                  <td className="py-3 text-center px-6">✓</td>
                  <td className="py-3 text-center px-6">✓</td>
                </tr>
                <tr>
                  <td className="py-3 px-6">Advanced Reporting</td>
                  <td className="py-3 text-center px-6">X</td>
                  <td className="py-3 text-center px-6">✓</td>
                  <td className="py-3 text-center px-6">✓</td>
                </tr>
                <tr>
                  <td className="py-3 px-6">24/7 Support</td>
                  <td className="py-3 text-center px-6">X</td>
                  <td className="py-3 text-center px-6">✓</td>
                  <td className="py-3 text-center px-6">✓</td>
                </tr>
                <tr>
                  <td className="py-3 px-6">Customization Options</td>
                  <td className="py-3 text-center px-6">X</td>
                  <td className="py-3 text-center px-6">X</td>
                  <td className="py-3 text-center px-6">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Additional Information */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-center mb-6 text-gray-800">Why Choose DotBrand?</h3>
          <p className="text-center text-gray-600">
            We provide solutions tailored for pharmacies of all sizes.
          </p>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-bold text-center mb-6 text-gray-800">Support and Resources</h3>
          <p className="text-center text-gray-600">
            Our plans come with comprehensive support and resources to help your pharmacy succeed.
          </p>
        </div>
        </div>
        </section>
    );
};

export default Plans;
