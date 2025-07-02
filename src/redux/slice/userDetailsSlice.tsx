import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../model/user";
import { getUserDetails } from "../functions/userDetails";

const UserDetailsSlice = createSlice({
    name: "userDetails",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getUserDetails.pending, (state)=> {
            state.loading = true
            state.error = undefined
        });

        builder.addCase(getUserDetails.fulfilled, (state, action)=> {
            state.loading = false
            state.value= action.payload;
        });

        builder.addCase(getUserDetails.rejected, (state ,action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
});

export const UserDetailsReducer = UserDetailsSlice.reducer