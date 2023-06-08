import { createAsyncThunk } from "@reduxjs/toolkit";
import { signIn, signUp } from "../../api/authService";
import { STORAGE_KEY } from "../../constans/utils";

export const signUpRequest = createAsyncThunk(
  "auth/signUp",
  async (data, { rejectWithValue }) => {
    try {
      const response = await signUp(data);
      localStorage.setItem(STORAGE_KEY.AUTH, JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const singInRequest = createAsyncThunk(
  "auth.signIn",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await signIn(payload);
      console.log(response);
      localStorage.setItem(STORAGE_KEY.AUTH, JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logout = () => {
  return localStorage.clear();
};

//  export const singInRequest = createAsyncThunk(
//     "auth/signIn",
//     async(payload,{rejectWithValue}=>{
//         try{
// const response = signIn(payload);
// return response.data;

//         }catch(error){
//             return rejectWithValue(error)
//         }
//     })
//  )
