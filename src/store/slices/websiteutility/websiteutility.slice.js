import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  getAllUtilityData
} from "./websiteutility.thunk";


const INIT_STATE = {
  utitlitydata :{
    utility:{}
  }
};


export const getAllUtilityThunk = createAsyncThunk(
  "getAllUtilit",
  getAllUtilityData
);



const websiteutilitySlice = createSlice({
  name: "websiteutility",
  initialState: INIT_STATE,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUtilityThunk.pending, (state) => {
        return state;
      })
      .addCase(getAllUtilityThunk.fulfilled, (state, action) => {
        state.utitlitydata.utility = action.payload;
        return state;
      })
      .addCase(getAllUtilityThunk.rejected, (state) => {
        return state;
      })
  },
});

export const {} = websiteutilitySlice.actions;

export default websiteutilitySlice.reducer;
