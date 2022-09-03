import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signin,signup } from './authenticationAPI';
import jwt_decode from "jwt-decode";


const initialState = {
    userName: "guest",
    email: "",
    token: "",
    staff: false
};

export const doSigninAsync = createAsyncThunk(
    'authentication/signin',
    async (action) => {
        const response = await signin(action);
        return response.data;
    }
);

export const doSignupAsync = createAsyncThunk(
    'authentication/signup',
    async (action) => {
        const response = await signup(action);
        return response.data;
    }
);

export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        logout: (state) => {
            state.token = ""
                    state.staff = false;
                    state.userName= "guest"
                    state.email=""
          },
    },

    extraReducers: (builder) => {
        builder
            .addCase(doSigninAsync.fulfilled, (state, action) => {
                console.log(jwt_decode(action.payload.access))
                if (action.payload.access) {
                    state.token = action.payload.access
                    state.staff = jwt_decode(action.payload.access).is_staff;
                    state.userName= jwt_decode(action.payload.access).username
                    state.email=jwt_decode(action.payload.access).email
                }
            })
            .addCase(doSignupAsync.fulfilled, (action) => {
                console.log(action)
                
            });
    },
});

// export sync method
export const { logout } = authenticationSlice.actions;

// export any part of the state
export const authenticationSelector = (state) => state.authentication;
export const selectStaff = (state) => state.authentication.staff;
export const selectEmail = (state) => state.authentication.email;
export const selectUserName = (state) => state.authentication.userName;
export const selectToken = (state) => state.authentication.token;
// export the reducer to the applicaion
export default authenticationSlice.reducer;
