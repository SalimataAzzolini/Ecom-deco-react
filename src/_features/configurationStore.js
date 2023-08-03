import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/_features/cartSlice';


const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    
});


export { store};







