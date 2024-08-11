import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import {
//   createBusinessAddress,
//   createBusinessProfile,
//   getAddresses,
//   getBusinessProfile,
//   updateBusinessAddress,
//   updateBusinessProfile,
//   updateUserProfileHandler,
//   uploadProfileHandler,
// } from "./user.thunk";
// import { formatUserResponse } from "../../../utils/global/user.global";
// import { removeOrgId, storeOrgId } from "../../../utils/global/auth.global";

const INIT_STATE = {
  userData: {
    profile: {},
    business: [],
    addresses: [],
  },
  isLoading: false,
};
// export const getBusinessProfileAsyncThunk = createAsyncThunk(
//   "getBusinessProfile",
//   getBusinessProfile
// );

// export const getAddressesAsyncThunk = createAsyncThunk(
//   "getAddresses",
//   getAddresses
// );

// export const uploadProfileThunk = createAsyncThunk(
//   "uploadProfile",
//   uploadProfileHandler
// );

// export const uploadProfileInfoThunk = createAsyncThunk(
//   "uploadProfileInfo",
//   updateUserProfileHandler
// );

// export const createBusinessProfileThunk = createAsyncThunk(
//   "createBusinessProfile",
//   createBusinessProfile
// );
// export const updateBusinessProfileThunk = createAsyncThunk(
//   "updateBusinessProfile",
//   updateBusinessProfile
// );
// export const createBusinessAddressThunk = createAsyncThunk(
//   "createBusinessAddress",
//   createBusinessAddress
// );
// export const updateBusinessAddressThunk = createAsyncThunk(
//   "updateBusinessAddress",
//   updateBusinessAddress
// );

const userSlice = createSlice({
  name: "user",
  initialState: INIT_STATE,
  reducers: {
    // deleteUser: (state, action) => {
    //   var id = action.payload;
    //   var users = state.clientUsers.filter((project) => project.id !== id);
    //   state.clientUsers = users;
    //   return state;
    // },
    setUserProfileDetails: (state, action) => {
      const { profiles, ...userData } = action.payload;
      state.userData.profile = userData;
      return state;
    },
    // profileTabChange: (state, action) => {
    //   state.selectedTab = action.payload;
    // },
    // setApplicationForProject: (state) => {
    //   state.isApplicableForProjectCreation = true;
    //   return state;
    // },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getBusinessProfileAsyncThunk.pending, (state) => {
  //       state.isLoading = true;
  //       return state;
  //     })
  //     .addCase(getBusinessProfileAsyncThunk.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.userData.business = action.payload;
  //       return state;
  //     })
  //     .addCase(getBusinessProfileAsyncThunk.rejected, (state) => {
  //       state.isLoading = false;
  //       return state;
  //     })
  //     .addCase(getAddressesAsyncThunk.pending, (state) => {
  //       state.isLoading = true;
  //       return state;
  //     })
  //     .addCase(getAddressesAsyncThunk.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.userData.addresses = action.payload;
  //       return state;
  //     })
  //     .addCase(getAddressesAsyncThunk.rejected, (state) => {
  //       state.isLoading = false;
  //       return state;
  //     })
  //     .addCase(uploadProfileThunk.pending, (state) => {
  //       state.isLoading = true;
  //       return state;
  //     })
  //     .addCase(uploadProfileThunk.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.userData.profile.imageUrl = action.payload?.url;
  //       return state;
  //     })
  //     .addCase(uploadProfileThunk.rejected, (state) => {
  //       state.isLoading = false;
  //     })
  //     .addCase(uploadProfileInfoThunk.pending, (state) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(uploadProfileInfoThunk.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.userData.profile = formatUserResponse(action.payload);
  //     })
  //     .addCase(uploadProfileInfoThunk.rejected, (state) => {
  //       state.isLoading = false;
  //     })
  //     .addCase(createBusinessProfileThunk.pending, (state) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(createBusinessProfileThunk.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.userData.business = action.payload;
  //     })
  //     .addCase(createBusinessProfileThunk.rejected, (state) => {
  //       state.isLoading = false;
  //     })
  //     .addCase(updateBusinessProfileThunk.pending, (state) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(updateBusinessProfileThunk.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.userData.business[0] = action.payload;
  //       return state;
  //     })
  //     .addCase(updateBusinessProfileThunk.rejected, (state) => {
  //       state.isLoading = false;
  //     })
  //     .addCase(createBusinessAddressThunk.pending, (state) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(createBusinessAddressThunk.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       return state;
  //     })
  //     .addCase(createBusinessAddressThunk.rejected, (state) => {
  //       state.isLoading = false;
  //     })
  //     .addCase(updateBusinessAddressThunk.pending, (state) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(updateBusinessAddressThunk.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.userData.addresses[0] = action.payload;
  //       return state;
  //     })
  //     .addCase(updateBusinessAddressThunk.rejected, (state) => {
  //       state.isLoading = false;
  //     });
  // },
});

export const {
  deleteUser,
  setUserProfileDetails,
  profileTabChange,
  setApplicationForProject,
} = userSlice.actions;

export default userSlice.reducer;
