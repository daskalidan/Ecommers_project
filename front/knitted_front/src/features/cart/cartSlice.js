import {  createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import { place_an_order } from './cartAPI';


const initialState = {
    theCart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    cartItemsCount: 0,
    cartTotalPrice: 0,
};

export const placeAnOrderAsync = createAsyncThunk(
    'cart/placeanorder',
    async (data) => {
        const response = await place_an_order(data);
        return response.data;
    }
);

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.theCart.findIndex((item) => item.id === action.payload.id)

            if (itemIndex >= 0) {
                state.theCart[itemIndex].quantity += 1;
                // toast.info(`1 more ${state.cart[itemIndex].name} added to cart`, {
                //     position: 'bottom-left'
                // })
            } else {
                state.theCart.push({ ...action.payload, quantity: 1 })
                // toast.success(`${action.payload.name} added to cart`, {
                //     position: 'bottom-left'
                // })
            }

            localStorage.setItem('cart', JSON.stringify(state.theCart))
        },

        clearCart: (state) => {
            state.theCart = []

            localStorage.setItem('cart', JSON.stringify(state.theCart))
        },

        removeFromCart: (state, action) => {
            const itemIndex = state.theCart.findIndex((item) => item.id === action.payload.id)

            if (state.theCart[itemIndex].quantity > 1) {
                state.theCart[itemIndex].quantity -= 1;
                // toast.info(`1 less ${state.cart[itemIndex].name} in cart`, {
                //     position: 'bottom-left'
                // })
            } else {
                state.theCart = state.theCart.filter(item => item.id !== action.payload.id)
                // toast.error(`${action.payload.name} removed from cart`, {
                //     position: 'bottom-left'
                // })
            }
            localStorage.setItem('cart', JSON.stringify(state.theCart))
        },
        cartCalc: (state) => {
            let totalsCalc = state.theCart.reduce(
                (total, item) => {
                    total.totalitems += item.quantity
                    total.totalprice += item.price * item.quantity
                    return total
                },
                {
                    totalitems: 0,
                    totalprice: 0
                }
            )
            state.cartItemsCount = totalsCalc.totalitems
            state.cartTotalPrice = totalsCalc.totalprice
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(placeAnOrderAsync.fulfilled, (state, action) => {
                console.log(action.payload)
                state.theCart = []
                // toast
            })

    },
});


export const { addToCart, removeFromCart, cartCalc, clearCart } = cartSlice.actions;


export const cartSelector = (state) => state.cart.theCart;
export const cartItemsCountSelector = (state) => state.cart.cartItemsCount;
export const cartTotalPriceSelector = (state) => state.cart.cartTotalPrice;

export default cartSlice.reducer;
