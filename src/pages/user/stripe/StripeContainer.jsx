import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import HeaderPublic from '@/components/public/HeaderPublic';
import FooterHome from '@/components/public/FooterHome';


//recuperation de la clé public de Stripe depuis .env.local
const PUBLIC_KEY  = process.env.REACT_APP_STRIPE_PUBLIC_KEY;
const stripeTestPromise = loadStripe(PUBLIC_KEY); //Initialisation de Stripe

const StripeContainer = () => {
    return (
        <div>
            <HeaderPublic/>
            <Elements stripe={stripeTestPromise}> 
                <CheckoutForm />
            </Elements>
            <FooterHome/>
        </div>
    );
};

export default StripeContainer;