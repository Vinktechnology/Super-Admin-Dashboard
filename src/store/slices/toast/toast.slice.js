import { createSlice } from "@reduxjs/toolkit";

const INIT_STATE = {
  showSuccessToast: false,
  showFailureToast: false,
  message: null,
  veritcal: "bottom",
  horizontal: "left",
};

const toastSlice = createSlice({
  name: "toast",
  initialState: INIT_STATE,
  reducers: {
    showSuccessToast: (state, action) => {
      state.showSuccessToast = true;
      state.message = action.payload.message;
      if (action.payload.vertical) {
        state.veritcal = action.payload.vertical;
      }
      if (action.payload.horizontal) {
        state.horizontal = action.payload.horizontal;
      }
      return state;
    },
    showFailureToast: (state, action) => {
      state.showFailureToast = true;

      state.message = action.payload.message;
      if (action.payload.vertical) {
        state.veritcal = action.payload.vertical;
      }
      if (action.payload.horizontal) {
        state.horizontal = action.payload.horizontal;
      }
      return state;
    },
    resetToastState: (state) => {
      state.showSuccessToast = false;
      state.showFailureToast = false;
      return state;
    },
  },
});

export const { showSuccessToast, showFailureToast, resetToastState } =
  toastSlice.actions;

export default toastSlice.reducer;
