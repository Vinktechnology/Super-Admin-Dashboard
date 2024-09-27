import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  getAllBanksData,addNewBanksData,getBanksByIdData,updateBanksData,updateBanksStatusData
} from "./banks.thunk";

const INIT_STATE = {
  banksdata :{
    banks:[],
    totalCount:0
  }
};


export const getAllBanksDataThunk = createAsyncThunk(
  "getAllBanks",
  getAllBanksData
);

export const addNewBanksThunk = createAsyncThunk(
  "addNewBanks",
  addNewBanksData
);

export const getBanksByIdThunk = createAsyncThunk(
  "getBanksById",
  getBanksByIdData
);

export const updateBanksThunk = createAsyncThunk(
  "updateBanks",
  updateBanksData
);

export const updateBanksStatusThunk = createAsyncThunk(
  "updateStatusBanks",
  updateBanksStatusData
);




const banksSlice = createSlice({
  name: "banks",
  initialState: INIT_STATE,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllBanksDataThunk.pending, (state) => {
        return state;
      })
      .addCase(getAllBanksDataThunk.fulfilled, (state, action) => {
        state.banksdata.banks = action.payload.bankPaymentMethods;
        state.banksdata.totalCount = action.payload.noOfEntries;
        return state;
      })
      .addCase(getAllBanksDataThunk.rejected, (state) => {
        return state;
      })
      .addCase(addNewBanksThunk.pending, (state) => {
        return state;
      })
      .addCase(addNewBanksThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(addNewBanksThunk.rejected, (state) => {
        return state;
      })
      .addCase(getBanksByIdThunk.pending, (state) => {
        return state;
      })
      .addCase(getBanksByIdThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(getBanksByIdThunk.rejected, (state) => {
        return state;
      })
      .addCase(updateBanksThunk.pending, (state) => {
        return state;
      })
      .addCase(updateBanksThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(updateBanksThunk.rejected, (state) => {
        return state;
      })
      .addCase(updateBanksStatusThunk.pending, (state) => {
        return state;
      })
      .addCase(updateBanksStatusThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(updateBanksStatusThunk.rejected, (state) => {
        return state;
      })
  },
});

export const {} = banksSlice.actions;

export default banksSlice.reducer;
