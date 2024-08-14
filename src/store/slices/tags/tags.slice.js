import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  getAllTagsData,addNewTagsData,getTagByIdData,updateTagData,updateTagStatusData
} from "./tags.thunk";


const INIT_STATE = {
  tagsdata :{
    tags:[],
    totalCount:0
  }
};


export const getAllTagsThunk = createAsyncThunk(
  "getAllTags",
  getAllTagsData
);

export const addNewTagThunk = createAsyncThunk(
  "addNewTag",
  addNewTagsData
);

export const getTagByIdThunk = createAsyncThunk(
  "getTagById",
  getTagByIdData
);

export const updateTagThunk = createAsyncThunk(
  "updateTag",
  updateTagData
);

export const updateTagStatusThunk = createAsyncThunk(
  "updateStatusTag",
  updateTagStatusData
);




const tagsSlice = createSlice({
  name: "tags",
  initialState: INIT_STATE,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTagsThunk.pending, (state) => {
        return state;
      })
      .addCase(getAllTagsThunk.fulfilled, (state, action) => {
        state.tagsdata.tags = action.payload.Categories;
        state.tagsdata.totalCount = action.payload.noOfEntries;
        return state;
      })
      .addCase(getAllTagsThunk.rejected, (state) => {
        return state;
      })
      .addCase(addNewTagThunk.pending, (state) => {
        return state;
      })
      .addCase(addNewTagThunk.fulfilled, (state, action) => {
       state.tagsdata.push(action.payload)
        return state;
      })
      .addCase(addNewTagThunk.rejected, (state) => {
        return state;
      })
      .addCase(getTagByIdThunk.pending, (state) => {
        return state;
      })
      .addCase(getTagByIdThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(getTagByIdThunk.rejected, (state) => {
        return state;
      })
      .addCase(updateTagThunk.pending, (state) => {
        return state;
      })
      .addCase(updateTagThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(updateTagThunk.rejected, (state) => {
        return state;
      })
      .addCase(updateTagStatusThunk.pending, (state) => {
        return state;
      })
      .addCase(updateTagStatusThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(updateTagStatusThunk.rejected, (state) => {
        return state;
      })
  },
});

export const {} = tagsSlice.actions;

export default tagsSlice.reducer;
