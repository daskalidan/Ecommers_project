import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from '../src/features/authentication/authenticationSlice'
import productsReducer, { getAllProductsAsync } from '../src/features/shop/productsSlice'

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    products: productsReducer,
  }
});

store.dispatch(getAllProductsAsync())