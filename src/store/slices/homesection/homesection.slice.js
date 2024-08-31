import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  getAllHomeSectionData,addNewHomeSectionData,getHomeSectionByIdData,updateHomeSectionData,updateHomeSectionStatusData 
} from "./homesection.thunk";

const INIT_STATE = {
  homesectiondata :{
    homesection:[],
    totalCount:0
  }
};


export const getAllHomeSectionThunk = createAsyncThunk(
  "getAllHomeSection",
  getAllHomeSectionData
);

export const addNewHomeSectionhunk = createAsyncThunk(
  "addNewHomeSection",
  addNewHomeSectionData
);

export const getHomeSectionByIdThunk = createAsyncThunk(
  "getHomeSectionById",
  getHomeSectionByIdData
);

export const updateHomeSectionThunk = createAsyncThunk(
  "updateHomeSection",
  updateHomeSectionData
);

export const updateHomeSectionStatusThunk = createAsyncThunk(
  "updateStatusHomeSection",
  updateHomeSectionStatusData
);




const homeSectionSlice = createSlice({
  name: "homesections",
  initialState: INIT_STATE,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllHomeSectionThunk.pending, (state) => {
        return state;
      })
      .addCase(getAllHomeSectionThunk.fulfilled, (state, action) => {
        state.homesectiondata.homesection = action.payload.homeSections;
        state.homesectiondata.totalCount = action.payload.noOfEntries;
        return state;
      })
      .addCase(getAllHomeSectionThunk.rejected, (state) => {
        return state;
      })
      .addCase(addNewHomeSectionhunk.pending, (state) => {
        return state;
      })
      .addCase(addNewHomeSectionhunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(addNewHomeSectionhunk.rejected, (state) => {
        return state;
      })
      .addCase(getHomeSectionByIdThunk.pending, (state) => {
        return state;
      })
      .addCase(getHomeSectionByIdThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(getHomeSectionByIdThunk.rejected, (state) => {
        return state;
      })
      .addCase(updateHomeSectionThunk.pending, (state) => {
        return state;
      })
      .addCase(updateHomeSectionThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(updateHomeSectionThunk.rejected, (state) => {
        return state;
      })
      .addCase(updateHomeSectionStatusThunk.pending, (state) => {
        return state;
      })
      .addCase(updateHomeSectionStatusThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(updateHomeSectionStatusThunk.rejected, (state) => {
        return state;
      })
  },
});

export const {} = homeSectionSlice.actions;

export default homeSectionSlice.reducer;
