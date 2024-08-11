import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  getAllCategoryData,addNewCategoryData,getCategoryByIdData,updateCategoryData,updateCategoryStatusData
} from "./category.thunk";

const INIT_STATE = {
  categorydata :[]
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




const categorySlice = createSlice({
  name: "category",
  initialState: INIT_STATE,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategoryDataThunk.pending, (state) => {
        return state;
      })
      .addCase(getAllCategoryDataThunk.fulfilled, (state, action) => {
        state.categorydata = action.payload.Categories;
        return state;
      })
      .addCase(getAllCategoryDataThunk.rejected, (state) => {
        return state;
      })
      .addCase(addNewCategoryThunk.pending, (state) => {
        return state;
      })
      .addCase(addNewCategoryThunk.fulfilled, (state, action) => {
       state.categorydata.push(action.payload)
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

export const {} = categorySlice.actions;

export default categorySlice.reducer;
