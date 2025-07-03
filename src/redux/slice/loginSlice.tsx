import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../model/lognModel";
import { login } from "../functions/login";

const LoginSlice = createSlice({
    name: "Login",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true;
            state.error = undefined
        });

        builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.value = null
            state.error = action.payload as string;
        });


        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.value = action.payload
        })
    }
})
export const LoginReducer = LoginSlice.reducer