import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PayPal from './components/stripe/Paypal';
import Stripe from './components/stripe/Stripe';
import Plans from './components/stripe/Plans';
import ConfirmPlan from "./components/stripe/ConfirmPlan"
import Failed from './components/stripe/Failed';
import Success from './components/stripe/Success';
import InitiateCheckout from './components/stripe/InitiateCheckout';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from "axios";
import PayPalPlans from './components/paypal/PayPalPlans';
import PayPalInitiateCheckout from './components/paypal/PayPalInitiateCheckout';
import PayPalConfirmPlan from './components/paypal/PayPalConfirmPlan';
import PayPalSuccess from './components/paypal/PayPalSuccess';
import PayPalFailed from './components/paypal/PayPalFailed';
import PaypalOneTimeButton from './components/paypal-onetime/PaypalButton';
import Homepage from './pages/HomePage';
import ContactUs from './pages/ContactUs';
import PricingPlans from './pages/PricingPlans';
import ProductFeatures from './pages/ProductFeatures';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SetupForm from './pages/SetupForm';

const stripePromise = loadStripe('pk_test_51NqDB7FUtqiloGGLtEWyVRgvWcwHw3JV21EB9FRIudrkCSPMCiJJRAImyKuZ45dcGpy3N6ZYkNBgpBiORto2IrA900R4CNW06K');

function App() {
  return (
    <Router>
      <Elements stripe={stripePromise}>
        <div>
        <Navbar />
        <Routes>
         <Route path="/" element={<Homepage />} />
         <Route path="/purchase" element={<SetupForm />} />
          <Route path="/features" element={<ProductFeatures />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/paypal" element={<PayPal />} />
          <Route path="/stripe" element={<Stripe />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/confirm-plan" element={<ConfirmPlan />} />
          <Route path="/initiate-checkout" element={<InitiateCheckout />} />
          <Route path="/success" element={<Success />} />
          <Route path="/failed" element={<Failed />} />
          <Route path="/paypal-plans" element={<PayPalPlans />} />
          <Route path="/paypal-initiate-checkout" element={<PayPalInitiateCheckout />} />
          <Route path="/paypal-confirm-plan" element={<PayPalConfirmPlan />} />
          <Route path="/paypal-success" element={<PayPalSuccess />} />
          <Route path="/paypal-failed" element={<PayPalFailed />} />
          <Route path="/paypal-onetime" element={<PaypalOneTimeButton />} />
        </Routes>
        <Footer/>
        </div>
      </Elements>
    </Router>
  );
}

export default App;
