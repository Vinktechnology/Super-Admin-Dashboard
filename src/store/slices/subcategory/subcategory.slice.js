import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  getAllCategoryData,addNewCategoryData,getCategoryByIdData,updateCategoryData,updateCategoryStatusData
} from "./subcategory.thunk";

const INIT_STATE = {
  subcategorydata :{
    subcategory:[],
    totalCount:0
  }
};


export const getAllCategoryDataThunk = createAsyncThunk(
  "getAllCategory",
  getAllCategoryData
);

export const addNewCategoryThunk = createAsyncThunk(
  "addNewCategory",
  addNewCategoryData
);

export const getCategoryByIdThunk = createAsyncThunk(
  "getCategoryById",
  getCategoryByIdData
);

export const updateCategoryThunk = createAsyncThunk(
  "updateCategory",
  updateCategoryData
);

export const updateCategoryStatusThunk = createAsyncThunk(
  "updateStatusCategory",
  updateCategoryStatusData
);




const subcategorySlice = createSlice({
  name: "subcategory",
  initialState: INIT_STATE,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategoryDataThunk.pending, (state) => {
        return state;
      })
      .addCase(getAllCategoryDataThunk.fulfilled, (state, action) => {
        state.subcategory.category = action.payload.Categories;
        state.subcategory.totalCount = action.payload.noOfEntries;
        return state;
      })
      .addCase(getAllCategoryDataThunk.rejected, (state) => {
        return state;
      })
      .addCase(addNewCategoryThunk.pending, (state) => {
        return state;
      })
      .addCase(addNewCategoryThunk.fulfilled, (state, action) => {
       state.subcategory.push(action.payload)
        return state;
      })
      .addCase(addNewCategoryThunk.rejected, (state) => {
        return state;
      })
      .addCase(getCategoryByIdThunk.pending, (state) => {
        return state;
      })
      .addCase(getCategoryByIdThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(getCategoryByIdThunk.rejected, (state) => {
        return state;
      })
      .addCase(updateCategoryThunk.pending, (state) => {
        return state;
      })
      .addCase(updateCategoryThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(updateCategoryThunk.rejected, (state) => {
        return state;
      })
      .addCase(updateCategoryStatusThunk.pending, (state) => {
        return state;
      })
      .addCase(updateCategoryStatusThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(updateCategoryStatusThunk.rejected, (state) => {
        return state;
      })
  },
});

export const {} = subcategorySlice.actions;

export default subcategorySlice.reducer;
