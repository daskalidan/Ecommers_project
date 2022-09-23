import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { log_out, signin, signup } from './authenticationAPI';
import jwt_decode from "jwt-decode";

import { toast } from 'react-toastify'

const initialState = {
    userName: "guest",
    email: "",
    token: "",
    staff: false
};

export const doSigninAsync = createAsyncThunk(
    'authentication/signin',
   (action) => {
    return signin(action);
    }
);

export const doSignupAsync = createAsyncThunk(
    'authentication/signup',
    (action) => {
        return signup(action);
    }
);

export const doSignoutAsync = createAsyncThunk(
    'authentication/signout',
    async (action) => {
        const response = await log_out(action);
        return response.data;
    }
);

export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        // logout: (state) => {
        //     state.token = ""
        //     state.staff = false;
        //     state.userName = "guest"
        //     state.email = ""
        // },
    },

    extraReducers: (builder) => {
        builder
            .addCase(doSigninAsync.fulfilled, (state, action) => {
                console.log(jwt_decode(action.payload.access))
                state.token = action.payload.access
                state.staff = jwt_decode(action.payload.access).is_staff;
                state.userName = jwt_decode(action.payload.access).username
                state.email = jwt_decode(action.payload.access).email
                toast.success(`wellcome ${jwt_decode(action.payload.access).username} `, {
                    position: 'bottom-left'
                })
            })
            .addCase(doSigninAsync.rejected, (action) => {
                console.log(action)
                toast.error('some of the details are incorrect', {
                    position: 'bottom-left'
                })
            })

            .addCase(doSignupAsync.fulfilled, (action) => {
                console.log(action.payload)
                toast.success(` registered successfully `, {
                    position: 'bottom-left'
                })

            })
            .addCase(doSignupAsync.rejected, (action) => {
                console.log(action)
                toast.error('something went wrong', {
                    position: 'bottom-left'
                })
            })


            .addCase(doSignoutAsync.fulfilled, (state, action) => {
                console.log(action)
                state.token = ""
                state.staff = false;
                state.userName = "guest"
                state.email = ""
            });
    },
});

// export sync method
// export const { logout } = authenticationSlice.actions;

// export any part of the state
export const authenticationSelector = (state) => state.authentication;
export const selectStaff = (state) => state.authentication.staff;
export const selectEmail = (state) => state.authentication.email;
export const selectUserName = (state) => state.authentication.userName;
export const selectToken = (state) => state.authentication.token;
// export the reducer to the applicaion
export default authenticationSlice.reducer;
