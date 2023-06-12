import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import Input from '@mui/joy/Input';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { addToCart, removeFromCart } from '@/_features/cartSlice';
import './style/cart-basket.scss';
import { Link } from 'react-router-dom';

const CartBasket = () => {

    // let cartItems = localStorage.getItem('persist:root') ? JSON.parse(localStorage.getItem('persist:root')).cartItems : null;
    // cartItems = cartItems ? JSON.parse(cartItems) : null;
    // let cartTotalAmount = localStorage.getItem('persist:root') ? JSON.parse(localStorage.getItem('persist:root')).cartTotalAmount : null;
    // let cartTotalQuantity = localStorage.getItem('persist:root') ? JSON.parse(localStorage.getItem('persist:root')).cartTotalQuantity : null;

    let cartItems = useSelector(state => state.cart.cartItems);
    console.log(cartItems);
    let cartTotalAmount = useSelector(state => state.cart.cartTotalAmount);
    let cartTotalQuantity = useSelector(state => state.cart.cartTotalQuantity);
    cartTotalAmount = cartTotalAmount.toFixed(2);

    const dispatch = useDispatch(); 

    const handleQuantityAdd = (item) => {
         dispatch(addToCart(item));
    }

    const handleQuantityRemove = (item) => {
        dispatch(removeFromCart(item));
    }

    const handleDeleteItem = (item) => {
        dispatch(removeFromCart(item));
    }


    return (
           <div className='card-basket-container'>
            {/* Container items left  */}
            <div className='container-items'>
                {cartItems ? cartItems.map((item, index) => (
                    <div className='product-item' key={index}>
                        {item.images && item.images
                            .slice(0, 1)
                            .map((image, index) => (
                                <img src={image.link} className='product-item-img'
                                alt="product" key={index}/>
                            ))
                    
                        }
                        <h6> {item.name}</h6>

                        <div className='item-quantity'>
                            <p>
                                {item.quantity}
                            </p>
                            <div className="icons-quantity">
                                <AddIcon className='icon-quantity'
                                    onClick={() => handleQuantityAdd(item)}
                                />
                                <RemoveIcon className='icon-quantity'
                                    onClick={() => handleQuantityRemove(item)}
                                />
                            </div>
                        </div> 
                            <p className='item-price'> {item.price} €</p>
                            <DeleteIcon
                             onClick={() => handleDeleteItem(item)}
                            />
                    </div>
                )
                ) : (
                    <div className='empty-cart'>
                        <h6>Votre panier est tristement vide</h6>
                    </div>

                )}
            </div>

            {/* Container items right */}
            <div className="block-container-total">

                {/* Container quantity and total price  */}
                <div className='container-total'>
                    <div className="total-quantity">
                        <h6>Quantité produits : </h6>
                        <p> {cartTotalQuantity}</p>

                    </div>
                    <div className='total-price'>
                        <h6 className='total-price-element'>Total</h6>
                        <p className='total-price-element'> {cartTotalAmount} €</p>
                    </div>
                    <div className="container-btn-basket">
                        <Link to='/user/checkout'
                            className='btn-basket'
                            >Valider mon panier
                        </Link>
                    </div>
                </div>
                 {/* Container reduction */}
                <div className='container-reduction'>
                        <Input
                            type="text"
                            placeholder='Code promo'
                            style={{width : "20rem"}}
                        />
                        <button className='btn-reduction'>Valider</button>
                </div>
            </div>
        </div>
    );
};

export default CartBasket;