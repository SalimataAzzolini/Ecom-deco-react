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
    const { userDatas, setUserDatas } = useContext(UserDatasContext);

    const generateOrderReference = () => {
        const REF_PREFIX = "REF";
        const randomNumber = Math.floor(Math.random() * 100000000);
        const referenceNumber = REF_PREFIX + randomNumber.toString().padStart(8, '0');
        return referenceNumber;
    }
    const reference = generateOrderReference();
    let user = "";
 
    if(localStorage.getItem('userDatas') !== null){
        const userDatas = localStorage.getItem('userDatas');
        user = JSON.parse(userDatas).email;
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
    }, [userDatas, navigate]);

    //Creation d'une commande
       const order = {
        reference: reference,
        user: user,
        products: cartItems,
        quantity: cartTotalQuantity,
        price: amount / 100,
        // status: "pending",
    };

    console.log(order);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card', //type de payment
            card: elements.getElement(CardElement) //recupere les infos de la carte
        });
        if(!error){
            try {
                console.log("Token generated!", paymentMethod);

                const {id} = paymentMethod;
                //Ajouter header authorisation
                const response = await axios.post('http://127.0.0.1:8000/payment/checkout', {
                    amount: amount,
                    id : id,
                    user : user,
                    order : order
                },
                );

                console.log(response);
          
                if(response.status === 200){
                    // const response = await axios.post('http://127.0.0.1:8000/order/create', order);
                    // console.log(response);
                    navigate("/user/profile/orders", { replace: true });
                }

            } catch (error) {
                console.log('Error', error);
            }
        }else{
            console.log(error.message);
        }
    }
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