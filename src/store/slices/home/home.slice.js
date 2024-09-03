import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
getAllHomeRenderData, getHomeRenderByIdData
} from "./home.thunk";

const INIT_STATE = {
  homerenderdata :{
    homerender:[],
    totalCount:0
  }
};


export const getAllHomeRenderThunk = createAsyncThunk(
  "getAllHomeRender",
  getAllHomeRenderData
);

export const   getHomeRenderByIdThunk = createAsyncThunk(
  "getHomeRenderById",
  getHomeRenderByIdData
);






const homeSlice = createSlice({
  name: "homerender",
  initialState: INIT_STATE,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllHomeRenderThunk.pending, (state) => {
        return state;
      })
      .addCase(getAllHomeRenderThunk.fulfilled, (state, action) => {
        state.homerenderdata.homerender = action.payload.homeRenderingData;
        state.homerenderdata.totalCount = action.payload.noOfEntries;
        return state;
      })
      .addCase(getAllHomeRenderThunk.rejected, (state) => {
        return state;
      })
      .addCase(getHomeRenderByIdThunk.pending, (state) => {
        return state;
      })
      .addCase(getHomeRenderByIdThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(getHomeRenderByIdThunk.rejected, (state) => {
        return state;
      })
  },
});

export const {} = homeSlice.actions;
export default homeSlice.reducer;
