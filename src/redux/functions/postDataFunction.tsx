import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostData } from "../../model/postData";

export const postDataFunction = createAsyncThunk("postsApiData", async() => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if(data.status !== 200){
        throw new Error("Api Data Error Please try Again");
    }
    const response: PostData = await data.json();
    return response;
})