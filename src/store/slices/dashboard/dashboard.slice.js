import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDashboardDataSlice } from "./dashboard.thunk";

const INIT_STATE = {
  main: {},
  isLoading: false,
  dashboardData:{}
};


export const getDashboardDataThunk = createAsyncThunk(
  "getDashboardDataSlice",
  getDashboardDataSlice
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: INIT_STATE,
  reducers: {
    startDashboardLoader: (state) => {
      state.isLoading = true;
    },
    stopDashboardLoader: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDashboardDataThunk.pending, (state) => {
        return state;
      })
      .addCase(getDashboardDataThunk.fulfilled, (state, action) => {
        state.dashboardData = action.payload;
        return state;
      })
      .addCase(getDashboardDataThunk.rejected, (state) => {
        return state;
      })
  },
});

export const { startDashboardLoader, stopDashboardLoader } =
  dashboardSlice.actions;

export default dashboardSlice.reducer;
