import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  getAllVendorData,getVendorByIdData,updateVendorStatusData,approveVendorData
} from "./vendor.thunk";

const INIT_STATE = {
  vendordata :{
    vendor:[],
    totalCount:0
  }
};


export const approveVendorDataThunk = createAsyncThunk(
  "approveVendor",
  approveVendorData
);

export const getAllVendorsDataThunk = createAsyncThunk(
  "getAllVendors",
  getAllVendorData
);

// export const addNewCategoryThunk = createAsyncThunk(
//   "addNewCategory",
//   addNewCategoryData
// );

export const getVendorByIdThunk = createAsyncThunk(
  "getVendorById",
  getVendorByIdData
);

// export const updateCategoryThunk = createAsyncThunk(
//   "updateCategory",
//   updateCategoryData
// );

export const updateVendorStatusThunk = createAsyncThunk(
  "updateStatusVendor",
  updateVendorStatusData
);




const vendorSlice = createSlice({
  name: "vendor",
  initialState: INIT_STATE,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllVendorsDataThunk.pending, (state) => {
        return state;
      })
      .addCase(getAllVendorsDataThunk.fulfilled, (state, action) => {
        state.vendordata.vendor = action.payload.vendors;
        state.vendordata.totalCount = action.payload.noOfEntries;
        return state;
      })
      .addCase(getAllVendorsDataThunk.rejected, (state) => {
        return state;
      })
      // .addCase(addNewCategoryThunk.pending, (state) => {
      //   return state;
      // })
      // .addCase(addNewCategoryThunk.fulfilled, (state, action) => {
      //   return state;
      // })
      // .addCase(addNewCategoryThunk.rejected, (state) => {
      //   return state;
      // })
      .addCase(getVendorByIdThunk.pending, (state) => {
        return state;
      })
      .addCase(getVendorByIdThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(getVendorByIdThunk.rejected, (state) => {
        return state;
      })
      // .addCase(updateCategoryThunk.pending, (state) => {
      //   return state;
      // })
      // .addCase(updateCategoryThunk.fulfilled, (state, action) => {
      //   return state;
      // })
      // .addCase(updateCategoryThunk.rejected, (state) => {
      //   return state;
      // })
      .addCase(updateVendorStatusThunk.pending, (state) => {
        return state;
      })
      .addCase(updateVendorStatusThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(updateVendorStatusThunk.rejected, (state) => {
        return state;
      })
      .addCase(approveVendorDataThunk.pending, (state) => {
        return state;
      })
      .addCase(approveVendorDataThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(approveVendorDataThunk.rejected, (state) => {
        return state;
      })

      
  },
});

export const {} = vendorSlice.actions;

export default vendorSlice.reducer;
