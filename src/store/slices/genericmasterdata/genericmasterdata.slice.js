import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  getAllGenericMasterDaData,addNewGenericMasterDaData,getGenericMasterByIdDaData,updateGenericMasterDaData,updateGenericMasterStatusDaData
} from "./genericmasterdata.thunk";

const INIT_STATE = {
  genericmasterdatada :{
    genericmasterda:[],
    totalCount:0
  }
};


export const getAllGenericMasterDaDataThunk = createAsyncThunk(
  "getAllGenericMasterDa",
  getAllGenericMasterDaData
);

export const addNewGenericMasterDaDataThunk = createAsyncThunk(
  "addNewGenericMasterDa",
  addNewGenericMasterDaData
);

export const getGenericMasterByIdDaDataThunk = createAsyncThunk(
  "getGenericMasterByIdDa",
  getGenericMasterByIdDaData
);

export const updateGenericMasterDaDataThunk = createAsyncThunk(
  "updateGenericMasterDa",
  updateGenericMasterDaData
);

export const updateGenericMasterStatusDaDataThunk = createAsyncThunk(
  "updateGenericMasterStatusDa",
  updateGenericMasterStatusDaData
);




const genericMasterDataSlice = createSlice({
  name: "genericmasterdata",
  initialState: INIT_STATE,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllGenericMasterDaDataThunk.pending, (state) => {
        return state;
      })
      .addCase(getAllGenericMasterDaDataThunk.fulfilled, (state, action) => {
        state.genericmasterdatada.genericmasterda = action.payload.productMasters;
        state.genericmasterdatada.totalCount = action.payload.noOfEntries;
        return state;
      })
      .addCase(getAllGenericMasterDaDataThunk.rejected, (state) => {
        return state;
      })
      .addCase(addNewGenericMasterDaDataThunk.pending, (state) => {
        return state;
      })
      .addCase(addNewGenericMasterDaDataThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(addNewGenericMasterDaDataThunk.rejected, (state) => {
        return state;
      })
      .addCase(getGenericMasterByIdDaDataThunk.pending, (state) => {
        return state;
      })
      .addCase(getGenericMasterByIdDaDataThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(getGenericMasterByIdDaDataThunk.rejected, (state) => {
        return state;
      })
      .addCase(updateGenericMasterDaDataThunk.pending, (state) => {
        return state;
      })
      .addCase(updateGenericMasterDaDataThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(updateGenericMasterDaDataThunk.rejected, (state) => {
        return state;
      })
      .addCase(updateGenericMasterStatusDaDataThunk.pending, (state) => {
        return state;
      })
      .addCase(updateGenericMasterStatusDaDataThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(updateGenericMasterStatusDaDataThunk.rejected, (state) => {
        return state;
      })
  },
});

export const {} = genericMasterDataSlice.actions;

export default genericMasterDataSlice.reducer;
