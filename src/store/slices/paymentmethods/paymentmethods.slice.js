import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  getAllPaymentMethodData,addNewPaymentMethodData,getPaymentMethodByIdData,updatePaymentMethodData,updatePaymentMethodStatusData
} from "./paymentmethods.thunk";

const INIT_STATE = {
  paymentmethoddata :{
    paymentmethod:[],
    totalCount:0
  }
};


export const getAllPaymentMethodDataThunk = createAsyncThunk(
  "getAllPaymentMethod",
  getAllPaymentMethodData
);

export const addNewPaymentMethodThunk = createAsyncThunk(
  "addNewPaymentMethod",
  addNewPaymentMethodData
);

export const getPaymentMethodByIdThunk = createAsyncThunk(
  "getPaymentMethodById",
  getPaymentMethodByIdData
);

export const updatePaymentMethodThunk = createAsyncThunk(
  "updatePaymentMethod",
  updatePaymentMethodData
);

export const updatePaymentMethodStatusThunk = createAsyncThunk(
  "updateStatusPaymentMethod",
  updatePaymentMethodStatusData
);




const paymentmethodSlice = createSlice({
  name: "paymentmethods",
  initialState: INIT_STATE,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPaymentMethodDataThunk.pending, (state) => {
        return state;
      })
      .addCase(getAllPaymentMethodDataThunk.fulfilled, (state, action) => {
        state.paymentmethoddata.paymentmethod = action.payload.paymentMethods;
        state.paymentmethoddata.totalCount = action.payload.noOfEntries;
        return state;
      })
      .addCase(getAllPaymentMethodDataThunk.rejected, (state) => {
        return state;
      })
      .addCase(addNewPaymentMethodThunk.pending, (state) => {
        return state;
      })
      .addCase(addNewPaymentMethodThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(addNewPaymentMethodThunk.rejected, (state) => {
        return state;
      })
      .addCase(getPaymentMethodByIdThunk.pending, (state) => {
        return state;
      })
      .addCase(getPaymentMethodByIdThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(getPaymentMethodByIdThunk.rejected, (state) => {
        return state;
      })
      .addCase(updatePaymentMethodThunk.pending, (state) => {
        return state;
      })
      .addCase(updatePaymentMethodThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(updatePaymentMethodThunk.rejected, (state) => {
        return state;
      })
      .addCase(updatePaymentMethodStatusThunk.pending, (state) => {
        return state;
      })
      .addCase(updatePaymentMethodStatusThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(updatePaymentMethodStatusThunk.rejected, (state) => {
        return state;
      })
  },
});

export const {} = paymentmethodSlice.actions;

export default paymentmethodSlice.reducer;
