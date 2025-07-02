import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../model/allPostData";
import { getAllPostData } from "../functions/allPostDataFunction";

const AllPostDataSlice = createSlice({
    name: "AllPostData",
    initialState,

    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllPostData.pending, (state) => {
            state.loading = true;
            state.error = undefined
        });

        builder.addCase(getAllPostData.rejected, (state, action) => {
            console.log("Erro", action.error.message);
            state.loading = false;
            state.error = action.error.message;
        });


        builder.addCase(getAllPostData.fulfilled, (state, action) => {
            state.loading = false;
            state.value = action.payload
        })

    }
});

export const allPostApiReducer = AllPostDataSlice.reducer;