import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  checkTokenValidity,
} from "./init.thunk";

const INIT_STATE = {
  isInitAuthCheckedDone: false,
};


export const checkForTokenValidityAsyncThunk = createAsyncThunk(
  "checkTokenValidity",
  checkTokenValidity
);  


const initSlice = createSlice({
  name: "init",
  initialState: INIT_STATE,
  reducers: {
    setInitAuthCheck: (state, action) => {
      state.isInitAuthCheckedDone = action.payload;
      return state;
    },
    },
    extraReducers: (builder) => {
      builder
        .addCase(checkForTokenValidityAsyncThunk.fulfilled, (state) => {
          state.isInitAuthCheckedDone = true;
          return state;
        })
      }
});

export const { setInitAuthCheck } = initSlice.actions;

export default initSlice.reducer;
