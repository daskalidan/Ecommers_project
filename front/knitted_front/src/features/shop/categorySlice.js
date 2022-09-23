import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { get_all_categories, add_new_category } from './productsAPI';


const initialState = {
    allCategories: [],

};

export const getAllCategoriesAsync = createAsyncThunk(
    'categories/getcategories',
    async () => {
        const response = await get_all_categories();
        return response.data;
    }
);

export const addNewCategoryAsync = createAsyncThunk(
    'categories/add_new_cat',
    async (action) => {
        const response = await add_new_category(action);
        return response.data;
    }
);

// todo
// export const deleteCategoryAsync = createAsyncThunk(
//     'Categories/deletecategory',
//     async (action) => {
//         const response = await delete_category(action);
//         return response.data;
//     }
// );

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getAllCategoriesAsync.fulfilled, (state, action) => {
                console.log(action.payload)
                if (action.payload) {
                    state.allCategories = action.payload
                }
            })

            .addCase(addNewCategoryAsync.fulfilled, (state, action) => {
                console.log(action)
                state.allCategories = action.payload
            })

    },
});

// export const { chooseCategory } = categoriesSlice.actions;

export const categoriesSelector = (state) => state.categories.allCategories;


export default categoriesSlice.reducer;


