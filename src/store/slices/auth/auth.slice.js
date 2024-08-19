import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  removeAccessToken,
  storeAccessToken,
} from "../../../utils/global/auth.global";
import {
  signInWithEmail,
} from "./auth.thunk";

const INIT_STATE = {
  isLoggedIn: false,
  isLoading: false,
};


export const loginByEmailAsyncThunk = createAsyncThunk(
  "emailLogin",
  signInWithEmail
);

const authSlice = createSlice({
  name: "auth",
  initialState: INIT_STATE,
  reducers: {
    logout: (state) => {
      removeAccessToken();
      state.isLoggedIn = false;
      return state;
    },
    
    startLoader: (state) => {
      state.isLoading = true;
      return state;
    },
    stopLoader: (state) => {
      state.isLoading = false;
      return state;
    },
    setUserAsLogin: (state) => {
      debugger;
      console.log("logged in");
      state.isLoggedIn = true;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByEmailAsyncThunk.pending, (state) => {
        state.isLoading = true;
        return state;
      })
      .addCase(loginByEmailAsyncThunk.fulfilled, (state, action) => {
        
        const token = action.payload?.token;
        storeAccessToken(token);
        state.isLoading = false;
        state.isLoggedIn = true;
        return state;
      })
      .addCase(loginByEmailAsyncThunk.rejected, (state) => {
        state.isLoading = false;
        return state;
      })
  },
});

export const {
  logout,
  startLoader,
  stopLoader,
  setUserAsLogin
} = authSlice.actions;

export default authSlice.reducer;
