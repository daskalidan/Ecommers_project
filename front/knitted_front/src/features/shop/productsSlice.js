import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { add_new_product, get_all_products, get_all_categories, add_new_category } from './productsAPI';


const initialState = {
    products: [],
    productsInCategory: [],
    category: 'all',
    allCategories: [],

};

export const getAllProductsAsync = createAsyncThunk(
    'products/get_all',
    async () => {
        const response = await get_all_products();
        return response.data;
    }
);

export const getAllCategoriesAsync = createAsyncThunk(
    'products/getcategories',
    async () => {
        const response = await get_all_categories();
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

export const addNewCategoryAsync = createAsyncThunk(
    'products/add_new_cat',
    async (action) => {
        const response = await add_new_category(action);
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

            .addCase(getAllCategoriesAsync.fulfilled, (state, action) => {
                console.log(action.payload)
                if (action.payload) {
                    state.allCategories = action.payload
                }
            })

            .addCase(addNewProductAsync.fulfilled, (state, action) => {
                console.log(action)
                state.products = action.payload;
                state.category = 'all'
                state.productsInCategory = action.payload
            })

            .addCase(addNewCategoryAsync.fulfilled, (state, action) => {
                console.log(action)
                state.allCategories = action.payload
            })


    },
});

export const { chooseCategory } = productsSlice.actions;

export const productsSelector = (state) => state.products.products;
export const productsInCategorySelector = (state) => state.products.productsInCategory;
export const categoriesSelector = (state) => state.products.allCategories;
export const categorySelector = (state) => state.products.category;

// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default productsSlice.reducer;


