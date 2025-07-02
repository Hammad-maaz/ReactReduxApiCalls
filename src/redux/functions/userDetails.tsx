import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserDetails } from "../../model/user";

export const getUserDetails = createAsyncThunk("getUserDetails", async () => {
    const data = await fetch("https://jsonplaceholder.org/users/1");
    if(data.status !== 200){
        throw new Error("Please try again.")
    }
    const response: UserDetails = await data.json();
    return response;
})