import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { add_new_product, get_all_products } from './productsAPI';


const initialState = {
    products: [],
    productsInCategory: [],

};

export const getAllProductsAsync = createAsyncThunk(
    'products/get_all',
    async () => {
        const response = await get_all_products();
        return response.data;
    }
);

export const addNewProductAsync = createAsyncThunk(
    'products/add_new',
    async (action) => {
        const response = await add_new_product(action);
        return response.data;
    }
);

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllProductsAsync.fulfilled, (state, action) => {
                console.log(action.payload)
                state.products = action.payload;
                // need to chang
                state.productsInCategory = action.payload
            })

            .addCase(addNewProductAsync.fulfilled, (state, action) => {
                console.log(action)
                state.products = action.payload
            })
    },
});

export const { increment } = productsSlice.actions;

export const productsSelector = (state) => state.products.products;
export const productsInCategorySelector = (state) => state.products.productsInCategory;

// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default productsSlice.reducer;


