import { createSlice } from "@reduxjs/toolkit"

const loadingSlice = createSlice({
    name: "loading",
    initialState: {
        value: false
    },

    reducers:{
        updateLoading: (state) => {
            state.value = !state.value
        }
    }
})

export const { updateLoading } = loadingSlice.actions;
export const loadingReducer = loadingSlice.reducer;
