import { configureStore } from "@reduxjs/toolkit";
import { loadingReducer } from "../slice/loadingSlice";
import { apiReducer } from "../slice/postsApiSlice";

const store = configureStore({
    reducer: {
        loading: loadingReducer,
        postsApiSlice: apiReducer
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;