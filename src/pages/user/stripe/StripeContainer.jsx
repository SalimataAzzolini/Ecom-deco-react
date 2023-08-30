import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import HeaderPublic from '@/components/public/HeaderPublic';
import FooterHome from '@/components/public/FooterHome';


const PUBLIC_KEY  = 'pk_test_51MyWilCyckqRdrUGOaV0ERZ6HB0PtnSt0cdfJiD8uI4S7ltJfNo2FY1Mk9EgpEttt9aEKcUOGExHCNLRdaGbnWj700AVx6Qk0V';
const stripeTestPromise = loadStripe(PUBLIC_KEY); 

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