import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from '../src/features/authentication/authenticationSlice'
import productsReducer, { getAllCategoriesAsync, getAllProductsAsync } from '../src/features/shop/productsSlice'
import cartReducer from '../src/features/cart/cartSlice'

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    products: productsReducer,
    cart: cartReducer,
  }
});

store.dispatch(getAllProductsAsync())
store.dispatch(getAllCategoriesAsync())
