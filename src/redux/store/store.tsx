import { configureStore } from "@reduxjs/toolkit";
import { loadingReducer } from "../slice/loadingSlice";
import { apiReducer } from "../slice/postsApiSlice";
import { UserDetailsReducer } from "../slice/userDetailsSlice";
import { allPostApiReducer } from "../slice/allPostDataSlice";

const store = configureStore({
    reducer: {
        loading: loadingReducer,
        postsApiSlice: apiReducer,
        userDetails: UserDetailsReducer,
        AllPostData: allPostApiReducer
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;