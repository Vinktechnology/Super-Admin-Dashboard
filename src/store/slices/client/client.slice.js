import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  getAllClientData,getClientByIdData
} from "./client.thunk";

const INIT_STATE = {
  clientdata :{
    client:[],
    totalCount:0
  }
};

export const getAllClientsDataThunk = createAsyncThunk(
  "getAllClients",
  getAllClientData
);

export const getClientByIdThunk = createAsyncThunk(
  "getClientById",
  getClientByIdData
);






const vendorSlice = createSlice({
  name: "clients",
  initialState: INIT_STATE,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllClientsDataThunk.pending, (state) => {
        return state;
      })
      .addCase(getAllClientsDataThunk.fulfilled, (state, action) => {
        state.clientdata.client = action.payload.Customers;
        state.clientdata.totalCount = action.payload.noOfEntries;
        return state;
      })
      .addCase(getAllClientsDataThunk.rejected, (state) => {
        return state;
      })
      .addCase(getClientByIdThunk.pending, (state) => {
        return state;
      })
      .addCase(getClientByIdThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(getClientByIdThunk.rejected, (state) => {
        return state;
      })
     

      
  },
});

export const {} = vendorSlice.actions;

export default vendorSlice.reducer;
