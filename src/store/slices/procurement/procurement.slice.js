import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  getAllProcurementData,addNewProcurementData,getProcurementByIdData,updateProcurementData,updateProcurementStatusData
} from "./procurement.thunk";

const INIT_STATE = {
  procurementdata :{
    procurement:[],
    totalCount:0
  }
};


export const getAllProcurementDataThunk = createAsyncThunk(
  "getAllProcurement",
  getAllProcurementData
);

export const addNewProcurementThunk = createAsyncThunk(
  "addNewProcurement",
  addNewProcurementData
);

export const getProcurementByIdThunk = createAsyncThunk(
  "getProcurementById",
  getProcurementByIdData
);

export const updateProcurementThunk = createAsyncThunk(
  "updateProcurement",
  updateProcurementData
);

export const updateProcurementStatusThunk = createAsyncThunk(
  "updateStatusProcurement",
  updateProcurementStatusData
);




const procurementSlice = createSlice({
  name: "procurement",
  initialState: INIT_STATE,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProcurementDataThunk.pending, (state) => {
        return state;
      })
      .addCase(getAllProcurementDataThunk.fulfilled, (state, action) => {
        state.procurementdata.procurement = action.payload.data;
        state.procurementdata.totalCount = action.payload.noOfEntries;
        return state;
      })
      .addCase(getAllProcurementDataThunk.rejected, (state) => {
        return state;
      })
      .addCase(addNewProcurementThunk.pending, (state) => {
        return state;
      })
      .addCase(addNewProcurementThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(addNewProcurementThunk.rejected, (state) => {
        return state;
      })
      .addCase(getProcurementByIdThunk.pending, (state) => {
        return state;
      })
      .addCase(getProcurementByIdThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(getProcurementByIdThunk.rejected, (state) => {
        return state;
      })
      .addCase(updateProcurementThunk.pending, (state) => {
        return state;
      })
      .addCase(updateProcurementThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(updateProcurementThunk.rejected, (state) => {
        return state;
      })
      .addCase(updateProcurementStatusThunk.pending, (state) => {
        return state;
      })
      .addCase(updateProcurementStatusThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(updateProcurementStatusThunk.rejected, (state) => {
        return state;
      })
  },
});

export const {} = procurementSlice.actions;

export default procurementSlice.reducer;
