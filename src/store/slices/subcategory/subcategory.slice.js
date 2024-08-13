import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  getAllSubCategoryData,addNewSubCategoryData,getSubCategoryByIdData,updateSubCategoryData,updateSubCategoryStatusData
} from "./subcategory.thunk";

const INIT_STATE = {
  subcategorydata :{
    subcategory:[],
    totalCount:0
  }
};


export const getAllSubCategoryDataThunk = createAsyncThunk(
  "getAllSubCategory",
  getAllSubCategoryData
);

export const addNewSubCategoryThunk = createAsyncThunk(
  "addNewSubCategory",
  addNewSubCategoryData
);

export const getSubCategoryByIdDataThunk = createAsyncThunk(
  "getSubCategoryById",
  getSubCategoryByIdData
);

export const updateSubCategoryThunk = createAsyncThunk(
  "updateSubCategory",
  updateSubCategoryData
);

export const updateSubCategoryStatusThunk = createAsyncThunk(
  "updateSubStatusCategory",
  updateSubCategoryStatusData
);




const subcategorySlice = createSlice({
  name: "subcategory",
  initialState: INIT_STATE,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllSubCategoryDataThunk.pending, (state) => {
        return state;
      })
      .addCase(getAllSubCategoryDataThunk.fulfilled, (state, action) => {
        state.subcategorydata.subcategory = action.payload.SubCategories;
        state.subcategorydata.totalCount = action.payload.noOfEntries;
        return state;
      })
      .addCase(getAllSubCategoryDataThunk.rejected, (state) => {
        return state;
      })
      .addCase(addNewSubCategoryThunk.pending, (state) => {
        return state;
      })
      .addCase(addNewSubCategoryThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(addNewSubCategoryThunk.rejected, (state) => {
        return state;
      })
      .addCase(getSubCategoryByIdDataThunk.pending, (state) => {
        return state;
      })
      .addCase(getSubCategoryByIdDataThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(getSubCategoryByIdDataThunk.rejected, (state) => {
        return state;
      })
      .addCase(updateSubCategoryThunk.pending, (state) => {
        return state;
      })
      .addCase(updateSubCategoryThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(updateSubCategoryThunk.rejected, (state) => {
        return state;
      })
      .addCase(updateSubCategoryStatusThunk.pending, (state) => {
        return state;
      })
      .addCase(updateSubCategoryStatusThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(updateSubCategoryStatusThunk.rejected, (state) => {
        return state;
      })
  },
});

export const {} = subcategorySlice.actions;

export default subcategorySlice.reducer;
