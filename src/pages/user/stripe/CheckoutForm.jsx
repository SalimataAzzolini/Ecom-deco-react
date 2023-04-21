import {useContext} from 'react';
import axios from 'axios';
import { CardElement, useStripe,useElements  } from '@stripe/react-stripe-js';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { UserDatasContext } from "@/_contexts/userDatasContext";


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
    const user = userDatas.id;

    const cartItems = useSelector(state => state.cart.cartItems);
    const cartTotalQuantity = useSelector(state => state.cart.cartTotalQuantity);

    let cartTotalAmount = useSelector(state => state.cart.cartTotalAmount);
    cartTotalAmount = cartTotalAmount.toFixed(2);
 
    const amount = cartTotalAmount * 100;

    //Creation d'une commande
    const order = {
        reference: reference,
        user: user,
        products: cartItems,
        quantity: cartTotalQuantity,
        price: amount / 100,
    }
   
    //Elements pour acces aux infos de payment
    const stripe = useStripe();
    const elements = useElements();


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
                const response = await axios.post('http://127.0.0.1:8000/payment/checkout', {
                    amount: amount,
                    id : id
                });
          
                if(response.status === 200){
                    const response = await axios.post('http://127.0.0.1:8000/order/create', order);
                    console.log(response);
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
                margin: '0 auto',
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
                <button type="submit">Pay</button>
            </form>
            
        </div>
    );
};

export default CheckoutForm;