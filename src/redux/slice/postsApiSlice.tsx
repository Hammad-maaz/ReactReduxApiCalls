import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../model/postData";
import { postDataFunction } from "../functions/postDataFunction";


const PostApiSlice = createSlice({
    name: "postsApiSlice",
    initialState,

    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(postDataFunction.pending, (state) => {
            state.loading = true;
            state.error = undefined
        });

        builder.addCase(postDataFunction.rejected, (state, action) => {
            console.log("Erro", action.error.message);
            state.loading = false;
            state.error = action.error.message;
        });


        builder.addCase(postDataFunction.fulfilled, (state, action) => {
            state.loading = false;
            state.value = action.payload
        })

    }
});

export const apiReducer = PostApiSlice.reducer;