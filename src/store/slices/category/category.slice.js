import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  getAllCategoryData,
} from "./category.thunk";

const INIT_STATE = {
  categorydata :[]
};


export const getAllCategoryDataThunk = createAsyncThunk(
  "getAllCategory",
  getAllCategoryData
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
  },
});

export const {} = categorySlice.actions;

export default categorySlice.reducer;
