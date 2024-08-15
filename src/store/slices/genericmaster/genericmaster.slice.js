import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  getAllGenericMasterData,addNewGenericMasterData,getGenericMasterByIdData,updateGenericMasterData,updateGenericMasterStatusData
} from "./genericmaster.thunk";

const INIT_STATE = {
  genericmasterdata :{
    genericmaster:[],
    totalCount:0
  }
};


export const getAllGenericMasterThunk = createAsyncThunk(
  "getAllGenericMaster",
  getAllGenericMasterData
);

export const addNewGenericMasterThunk = createAsyncThunk(
  "addNewGenericMaster",
  addNewGenericMasterData
);

export const getGenericMasterByIdThunk = createAsyncThunk(
  "getGenericMasterById",
  getGenericMasterByIdData
);

export const updateGenericMasterThunk = createAsyncThunk(
  "updateGenericMaster",
  updateGenericMasterData
);

export const updateGenericMasterStatusThunk = createAsyncThunk(
  "updateStatusGenericMaster",
  updateGenericMasterStatusData
);




const genericMasterSlice = createSlice({
  name: "genericmaster",
  initialState: INIT_STATE,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllGenericMasterThunk.pending, (state) => {
        return state;
      })
      .addCase(getAllGenericMasterThunk.fulfilled, (state, action) => {
        state.genericmasterdata.genericmaster = action.payload.genericProductMasters;
        state.genericmasterdata.totalCount = action.payload.noOfEntries;
        return state;
      })
      .addCase(getAllGenericMasterThunk.rejected, (state) => {
        return state;
      })
      .addCase(addNewGenericMasterThunk.pending, (state) => {
        return state;
      })
      .addCase(addNewGenericMasterThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(addNewGenericMasterThunk.rejected, (state) => {
        return state;
      })
      .addCase(getGenericMasterByIdThunk.pending, (state) => {
        return state;
      })
      .addCase(getGenericMasterByIdThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(getGenericMasterByIdThunk.rejected, (state) => {
        return state;
      })
      .addCase(updateGenericMasterThunk.pending, (state) => {
        return state;
      })
      .addCase(updateGenericMasterThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(updateGenericMasterThunk.rejected, (state) => {
        return state;
      })
      .addCase(updateGenericMasterStatusThunk.pending, (state) => {
        return state;
      })
      .addCase(updateGenericMasterStatusThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(updateGenericMasterStatusThunk.rejected, (state) => {
        return state;
      })
  },
});

export const {} = genericMasterSlice.actions;

export default genericMasterSlice.reducer;
