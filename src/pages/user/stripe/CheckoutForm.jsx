import {useContext, useEffect} from 'react';
import axios from 'axios';
import { CardElement, useStripe,useElements  } from '@stripe/react-stripe-js';
import { useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

import { UserDatasContext } from "@/_contexts/userDatasContext";
import { accountService } from '@/_services/account.service';


const CheckoutForm = () => {

    let navigate = useNavigate();
    //const { userDatas, setUserDatas } = useContext(UserDatasContext);

    const generateOrderReference = () => {
        const REF_PREFIX = "REF";
        const randomNumber = Math.floor(Math.random() * 100000000);
        const referenceNumber = REF_PREFIX + randomNumber.toString().padStart(8, '0');
        return referenceNumber;
    }
    const reference = generateOrderReference();
    let user = "";
    let userName = "";
    let userAddress = "";
    let userZipCode = "";
    let userCity = "";
 
    if(localStorage.getItem('userDatas') !== null){
        const userDatas = localStorage.getItem('userDatas');
        user = JSON.parse(userDatas).email;
        userName = JSON.parse(userDatas).firstname;
        userAddress = JSON.parse(userDatas).address;
        userZipCode = JSON.parse(userDatas).zipcode;
        userCity = JSON.parse(userDatas).city;
        console.log(user);
    }
    
    const cartItems = useSelector(state => state.cart.cartItems);
    const cartTotalQuantity = useSelector(state => state.cart.cartTotalQuantity);

    let cartTotalAmount = useSelector(state => state.cart.cartTotalAmount);
    cartTotalAmount = cartTotalAmount.toFixed(2);
 
    const amount = cartTotalAmount * 100;
 
   
    //Elements pour acces aux infos de payment
    const stripe = useStripe();
    const elements = useElements();

    // Vérifier si l'utilisateur est connecté
      useEffect(() => {
        if (!accountService.isLogged) {
            navigate('/auth/login');
        }
    }, [ navigate]);

    //Creation d'une commande
       const order = {
        reference: reference,
        user: user,
        products: cartItems,
        quantity: cartTotalQuantity,
        price: amount / 100,
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const { error, paymentMethod } = await stripe.createPaymentMethod({
          type: 'card',
          card: elements.getElement(CardElement),
          billing_details: {
            name: userName,
            address: {
              line1: userAddress,
              postal_code: userZipCode,
              city: userCity,
            },
          },
        });
      
        if (!error) {
          try {
            console.log("Token generated!", paymentMethod);
            const { id } = paymentMethod;
            const payload = JSON.stringify({ amount: amount, id: id, user: user, order: order });
            const secretKey = process.env.STRIPE_SECRET_KEY;
            const signature = await stripe.createSignature(payload, secretKey);
            
            const response = await axios.post('http://localhost:8000/payment/checkout', {
              amount: amount,
              id: id,
              user: user,
              order: order,
            },
            {
              headers: {
                Authorization: `Bearer ${accountService.getToken()}`,
                'Stripe-Signature': signature,
              }
            });
      
            console.log(response);
      
            if (response.status === 200) {
              navigate("/user/profile/orders", { replace: true });
            }
      
          } catch (error) {
            console.log('Error', error);
          }
        } else {
          console.log(error.message);
        }
      };
      
    return (
        <div>
            <form onSubmit={handleSubmit}
            style={{
                maxWidth: 500,
                margin: '3rem auto',
                padding: '1rem',
                border: '1px solid #ccc',
                borderRadius: '5px'
            }}
            
            >
                <CardElement
                    options={{
                        hidePostalCode: true,
                    }}

                />
                <Button 
                type="submit"
                variant="contained"
                color="success"
                disabled={!stripe}
                style={{margin: '1rem auto ',}}

                >
                    Payer
                </Button>
            </form>
            
        </div>
    );
};

export default CheckoutForm;