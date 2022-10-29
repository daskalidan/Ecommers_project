import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { add_new_product, get_all_products, delete_product, edit_product } from './productsAPI';


const initialState = {
    products: [],
    productsInCategory: [],
    category: 'all',

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

export const editProductAsync = createAsyncThunk(
    'products/add_new_cat',
    async (action) => {
        const response = await edit_product(action);
        return response.data;
    }
);

export const deleteProductAsync = createAsyncThunk(
    'products/deleteproduct',
    async (action) => {
        const response = await delete_product(action);
        return response.data;
    }
);

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        chooseCategory: (state, action) => {
            state.category = action.payload
            state.productsInCategory = state.category === 'all' ? state.products: state.products.filter(product => product.category === state.category.id)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllProductsAsync.fulfilled, (state, action) => {
                console.log(action.payload)
                state.products = action.payload;
                state.category = 'all'
                state.productsInCategory = action.payload
            })

            .addCase(addNewProductAsync.fulfilled, (state, action) => {
                console.log(action)
                state.products = action.payload;
                state.category = 'all'
                state.productsInCategory = action.payload
            })

            .addCase(deleteProductAsync.fulfilled, (state, action) => {
                console.log(action)
                if (action.payload) {
                    state.products = action.payload
                    state.category = 'all'
                    state.productsInCategory = action.payload
                    
                }
            })

            .addCase(editProductAsync.fulfilled, (state, action) => {
                console.log(action.payload)
                state.products = action.payload;
                state.category = 'all'
                state.productsInCategory = action.payload
            })


    },
});

export const { chooseCategory } = productsSlice.actions;

export const productsSelector = (state) => state.products.products;
export const productsInCategorySelector = (state) => state.products.productsInCategory;
export const categorySelector = (state) => state.products.category;

// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default productsSlice.reducer;


