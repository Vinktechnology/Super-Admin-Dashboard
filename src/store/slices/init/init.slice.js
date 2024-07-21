import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initSlice = createSlice({
  name: "init",
  initialState: INIT_STATE,
  reducers: {
    },
});

export const { setInitAuthCheck } = initSlice.actions;

export default initSlice.reducer;
