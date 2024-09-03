import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  getAllBannerData,addNewBannerData,getBannerByIdData,updateBannerData,updateBannerStatusData 
} from "./banner.thunk";

const INIT_STATE = {
  bannerdata :{
    bannerArr:[],
    totalCount:0
  }
};


export const getAllBannerThunk = createAsyncThunk(
  "getAllBanner",
  getAllBannerData
);

export const addNewBannerThunk = createAsyncThunk(
  "addNewBanner",
  addNewBannerData
);

export const getBannerByIdThunk = createAsyncThunk(
  "getBannerById",
  getBannerByIdData
);

export const updateBannerThunk = createAsyncThunk(
  "updateBanner",
  updateBannerData
);

export const updateBannerStatusThunk = createAsyncThunk(
  "updateStatusBanner",
  updateBannerStatusData
);




const bannerSlice = createSlice({
  name: "banner",
  initialState: INIT_STATE,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllBannerThunk.pending, (state) => {
        return state;
      })
      .addCase(getAllBannerThunk.fulfilled, (state, action) => {
        state.bannerdata.bannerArr = action.payload.data;
        state.bannerdata.totalCount = action.payload.noOfEntries;
        return state;
      })
      .addCase(getAllBannerThunk.rejected, (state) => {
        return state;
      })
      .addCase(addNewBannerThunk.pending, (state) => {
        return state;
      })
      .addCase(addNewBannerThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(addNewBannerThunk.rejected, (state) => {
        return state;
      })
      .addCase(getBannerByIdThunk.pending, (state) => {
        return state;
      })
      .addCase(getBannerByIdThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(getBannerByIdThunk.rejected, (state) => {
        return state;
      })
      .addCase(updateBannerThunk.pending, (state) => {
        return state;
      })
      .addCase(updateBannerThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(updateBannerThunk.rejected, (state) => {
        return state;
      })
      .addCase(updateBannerStatusThunk.pending, (state) => {
        return state;
      })
      .addCase(updateBannerStatusThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(updateBannerStatusThunk.rejected, (state) => {
        return state;
      })
  },
});

export const {} = bannerSlice.actions;

export default bannerSlice.reducer;
