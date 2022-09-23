import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from '../src/features/authentication/authenticationSlice'
import productsReducer, { getAllProductsAsync } from '../src/features/shop/productsSlice'
import cartReducer, { cartCalc } from '../src/features/cart/cartSlice'
import categoriesReducer, { getAllCategoriesAsync } from '../src/features/shop/categorySlice'

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
  }
});

store.dispatch(getAllProductsAsync())
store.dispatch(getAllCategoriesAsync())
store.dispatch(cartCalc())