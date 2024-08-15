import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  getAllHSNTaxCodeData,addNewHSNTaxCodeData,getHSNTaxCodeByIdData,updateHSNTaxCodeData,updateHSNTaxCodeStatusData
} from "./hsntaxcode.thunk";

const INIT_STATE = {
  hsntaxcodedata :{
    hsntaxcode:[],
    totalCount:0
  }
};


export const getAllHSNTaxCodeThunk = createAsyncThunk(
  "getAllHSNTaxCode",
  getAllHSNTaxCodeData
);

export const addNewHSNTaxCodeThunk = createAsyncThunk(
  "addNewHSNTaxCode",
  addNewHSNTaxCodeData
);

export const getHSNTaxCodeByIdThunk = createAsyncThunk(
  "getPHSNTaxCodeById",
  getHSNTaxCodeByIdData
);

export const updateHSNTaxCodeThunk = createAsyncThunk(
  "updateHSNTaxCode",
  updateHSNTaxCodeData
);

export const updateHSNTaxCodeStatusThunk = createAsyncThunk(
  "updateStatusHSNTaxCode",
  updateHSNTaxCodeStatusData
);




const hsntaxcodeSlice = createSlice({
  name: "hsntaxcode",
  initialState: INIT_STATE,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllHSNTaxCodeThunk.pending, (state) => {
        return state;
      })
      .addCase(getAllHSNTaxCodeThunk.fulfilled, (state, action) => {
        state.hsntaxcodedata.hsntaxcode = action.payload.codes;
        state.hsntaxcodedata.totalCount = action.payload.noOfEntries;
        return state;
      })
      .addCase(getAllHSNTaxCodeThunk.rejected, (state) => {
        return state;
      })
      .addCase(addNewHSNTaxCodeThunk.pending, (state) => {
        return state;
      })
      .addCase(addNewHSNTaxCodeThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(addNewHSNTaxCodeThunk.rejected, (state) => {
        return state;
      })
      .addCase(getHSNTaxCodeByIdThunk.pending, (state) => {
        return state;
      })
      .addCase(getHSNTaxCodeByIdThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(getHSNTaxCodeByIdThunk.rejected, (state) => {
        return state;
      })
      .addCase(updateHSNTaxCodeThunk.pending, (state) => {
        return state;
      })
      .addCase(updateHSNTaxCodeThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(updateHSNTaxCodeThunk.rejected, (state) => {
        return state;
      })
      .addCase(updateHSNTaxCodeStatusThunk.pending, (state) => {
        return state;
      })
      .addCase(updateHSNTaxCodeStatusThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(updateHSNTaxCodeStatusThunk.rejected, (state) => {
        return state;
      })
  },
});

export const {} = hsntaxcodeSlice.actions;

export default hsntaxcodeSlice.reducer;
