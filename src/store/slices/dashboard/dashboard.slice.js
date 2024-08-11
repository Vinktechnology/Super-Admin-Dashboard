import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { fetchProjectMatrixHandler } from "./dashboard.thunk";

const INIT_STATE = {
  main: {},
  isLoading: false,
};


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
  }
});

export const { startDashboardLoader, stopDashboardLoader } =
  dashboardSlice.actions;

export default dashboardSlice.reducer;
