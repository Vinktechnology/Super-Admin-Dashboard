import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  getAllFilterData,addNewFilterData,getFilterByIdData,updateFilterData,updateFilterStatusData
} from "./filter.thunk";

const INIT_STATE = {
  filterdata :{
    filter:[],
    totalCount:0
  }
};


export const getAllFilterThunk = createAsyncThunk(
  "getAllFilter",
  getAllFilterData
);

export const addNewFilterThunk = createAsyncThunk(
  "addNewFilter",
  addNewFilterData
);

export const getFilterByIdThunk = createAsyncThunk(
  "getFilterById",
  getFilterByIdData
);

export const updateFilterThunk = createAsyncThunk(
  "updateFilter",
  updateFilterData
);

export const updateFilterStatusThunk = createAsyncThunk(
  "updateStatusFilter",
  updateFilterStatusData
);




const filterSlice = createSlice({
  name: "filterSlice",
  initialState: INIT_STATE,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllFilterThunk.pending, (state) => {
        return state;
      })
      .addCase(getAllFilterThunk.fulfilled, (state, action) => {
        state.filterdata.filter = action.payload.data;
        state.filterdata.totalCount = action.payload.noOfEntries;
        return state;
      })
      .addCase(getAllFilterThunk.rejected, (state) => {
        return state;
      })
      .addCase(addNewFilterThunk.pending, (state) => {
        return state;
      })
      .addCase(addNewFilterThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(addNewFilterThunk.rejected, (state) => {
        return state;
      })
      .addCase(getFilterByIdThunk.pending, (state) => {
        return state;
      })
      .addCase(getFilterByIdThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(getFilterByIdThunk.rejected, (state) => {
        return state;
      })
      .addCase(updateFilterThunk.pending, (state) => {
        return state;
      })
      .addCase(updateFilterThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(updateFilterThunk.rejected, (state) => {
        return state;
      })
      .addCase(updateFilterStatusThunk.pending, (state) => {
        return state;
      })
      .addCase(updateFilterStatusThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(updateFilterStatusThunk.rejected, (state) => {
        return state;
      })
  },
});

export const {} = filterSlice.actions;

export default filterSlice.reducer;
