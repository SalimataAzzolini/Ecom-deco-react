import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {

            const item = state.cartItems.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity++;
                state.cartTotalQuantity++;
                state.cartTotalAmount += item.price;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
                state.cartTotalQuantity++;
                state.cartTotalAmount += action.payload.price;
            } 
        },
        removeFromCart(state, action) {
            const item = state.cartItems.find((item) => item.id === action.payload.id);
            if (item.quantity > 1) {
                item.quantity--;
                state.cartTotalQuantity--;
                state.cartTotalAmount -= item.price;
            }
            else {
                state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
                state.cartTotalQuantity--;
                state.cartTotalAmount -= item.price;
            }

           
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
