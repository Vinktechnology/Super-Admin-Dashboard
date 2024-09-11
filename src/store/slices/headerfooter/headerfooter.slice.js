import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  getAllHeaderAndFooterData,addNewHeaderAndFooterData,getHeaderAndFooterByIdData,updateHeaderAndFooterData,updateHeaderAndFooterStatusData
} from "./headerfooter.thunk";

const INIT_STATE = {
  headerandfooterdata :{
    headerandfooter:[],
    totalCount:0
  }
};


export const getAllHeaderAndFooterDataThunk = createAsyncThunk(
  "getAllHeaderAndFooter",
  getAllHeaderAndFooterData
);

export const addNewHeaderAndFooterThunk = createAsyncThunk(
  "addNewHeaderAndFooter",
  addNewHeaderAndFooterData
);

export const getHeaderAndFooterByIdThunk = createAsyncThunk(
  "getHeaderAndFooterById",
  getHeaderAndFooterByIdData
);

export const updateHeaderAndFooterThunk = createAsyncThunk(
  "updateHeaderAndFooter",
  updateHeaderAndFooterData
);

export const updateHeaderAndFooterStatusThunk = createAsyncThunk(
  "updateStatusHeaderAndFooter",
  updateHeaderAndFooterStatusData
);




const headerandfooterSlice = createSlice({
  name: "headerandfooter",
  initialState: INIT_STATE,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllHeaderAndFooterDataThunk.pending, (state) => {
        return state;
      })
      .addCase(getAllHeaderAndFooterDataThunk.fulfilled, (state, action) => {
        state.headerandfooterdata.headerandfooter = action.payload.webLinks;
        state.headerandfooterdata.totalCount = action.payload.noOfEntries;
        return state;
      })
      .addCase(getAllHeaderAndFooterDataThunk.rejected, (state) => {
        return state;
      })
      .addCase(addNewHeaderAndFooterThunk.pending, (state) => {
        return state;
      })
      .addCase(addNewHeaderAndFooterThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(addNewHeaderAndFooterThunk.rejected, (state) => {
        return state;
      })
      .addCase(getHeaderAndFooterByIdThunk.pending, (state) => {
        return state;
      })
      .addCase(getHeaderAndFooterByIdThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(getHeaderAndFooterByIdThunk.rejected, (state) => {
        return state;
      })
      .addCase(updateHeaderAndFooterThunk.pending, (state) => {
        return state;
      })
      .addCase(updateHeaderAndFooterThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(updateHeaderAndFooterThunk.rejected, (state) => {
        return state;
      })
      .addCase(updateHeaderAndFooterStatusThunk.pending, (state) => {
        return state;
      })
      .addCase(updateHeaderAndFooterStatusThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(updateHeaderAndFooterStatusThunk.rejected, (state) => {
        return state;
      })
  },
});

export const {} = headerandfooterSlice.actions;

export default headerandfooterSlice.reducer;
