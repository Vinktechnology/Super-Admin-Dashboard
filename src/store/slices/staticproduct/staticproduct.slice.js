import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const INIT_STATE = {
        brand:"",
        category:""
  };

const staticProdcutSlice = createSlice({
  name: "init",
  initialState: INIT_STATE,
  reducers: {
    setCategory: (state, action) => {
        return {...state,category:action.payload}
      },
      setBrand: (state, action) => {
        return {...state, brand:action.payload}
      },
    },
});

export const {  setCategory ,setBrand } = staticProdcutSlice.actions;

export default staticProdcutSlice.reducer;
