import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  updateProductData,
  getAllProductsData,
  getProductsByIdData,
  updateProductStatusData,
  approveProductData
} from "./product.thunk";

const INIT_STATE = {
  productTemplateData: {},
  productsdata: {
    products: [],
    totalCount: 0,
  },
};

export const approveProductDataThunk = createAsyncThunk(
  "approveProduct",
  approveProductData
);


export const getAllProductsThunk = createAsyncThunk(
  "getAllProducts",
  getAllProductsData
);

// export const addNewCategoryThunk = createAsyncThunk(
//   "addNewCategory",
//   addNewCategoryData
// );

export const getProductsIdThunk = createAsyncThunk(
  "getProductsById",
  getProductsByIdData
);

export const updateProductThunk = createAsyncThunk(
  "updateProduct",
  updateProductData
);

export const updateProductStatusThunk = createAsyncThunk(
  "updateStatusProduct",
  updateProductStatusData
);

const productSlice = createSlice({
  name: "product",
  initialState: INIT_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateProductThunk.pending, (state) => {
        return state;
      })
      .addCase(updateProductThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(updateProductThunk.rejected, (state) => {
        return state;
      })

      .addCase(getAllProductsThunk.pending, (state) => {
        return state;
      })
      .addCase(getAllProductsThunk.fulfilled, (state, action) => {
        state.productsdata.products = action.payload.products;
        state.productsdata.totalCount = action.payload.noOfEntries;
        return state;
      })
      .addCase(getAllProductsThunk.rejected, (state) => {
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
      .addCase(getProductsIdThunk.pending, (state) => {
        return state;
      })
      .addCase(getProductsIdThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(getProductsIdThunk.rejected, (state) => {
        return state;
      })
      .addCase(updateProductStatusThunk.pending, (state) => {
        return state;
      })
      .addCase(updateProductStatusThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(updateProductStatusThunk.rejected, (state) => {
        return state;
      })
      .addCase(approveProductDataThunk.pending, (state) => {
        return state;
      })
      .addCase(approveProductDataThunk.fulfilled, (state, action) => {
        return state;
      })
      .addCase(approveProductDataThunk.rejected, (state) => {
        return state;
      });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
