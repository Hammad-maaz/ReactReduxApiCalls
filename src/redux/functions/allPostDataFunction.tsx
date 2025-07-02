import { createAsyncThunk } from "@reduxjs/toolkit";
import { AllPostData } from "../../model/allPostData";

export const getAllPostData = createAsyncThunk("AllPostData", async() => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    if(data.status !== 200){
        throw new Error("Api Data Error Please try Again");
    }
    const response: AllPostData[] = await data.json();
    return response;
})