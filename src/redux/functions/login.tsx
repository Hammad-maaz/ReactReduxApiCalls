import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginModel } from "../../model/lognModel";

// interface payload{
//     username: String,
//     password: String
// }

// use this interface when you go with raw->josn. But if you wanna go with form data then follow as below. 
// more is that when go with raw->json you need use json.STRINGYFIY in body with payload
export const login = createAsyncThunk<LoginModel, FormData>(
  "auth/login",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: formData,
      });

      if (res.status !== 200) {
        return rejectWithValue("Invalid username OR password");
      }

      const data: LoginModel = await res.json();
      return data;
    } catch (err: any) {
      console.log("Catch Block");
      return rejectWithValue("Login failed");
    }
  }
);
