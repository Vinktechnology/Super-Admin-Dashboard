// import {
//   addBusinessAddress,
//   addBusinessProfile,
//   editBusinessAddress,
//   getAddressesApi,
//   getBusinessProfileApi,
//   uploadUserProfileApi,
//   userApi,
// } from "../../../utils/apis.utils";
// import {
//   startDashboardLoader,
//   stopDashboardLoader,
// } from "../dashboard/dashboard.slice";
// import { showFailureToast, showSuccessToast } from "../toast/toast.slice";
// import { editBusinessProfile } from "./../../../utils/apis.utils";


// export const getBusinessProfile = async (__, thunkApi) => {
//   try {
//     thunkApi.dispatch(startDashboardLoader());
//     const { user } = thunkApi.extra.apiService;
//     const response = await user.get(getBusinessProfileApi);
//     const responseData = response.data;
//     return responseData;
//   } catch (err) {
//     return Promise.reject(err);
//   } finally {
//     thunkApi.dispatch(stopDashboardLoader());
//   }
// };

// export const getAddresses = async (__, thunkApi) => {
//   try {
//     thunkApi.dispatch(startDashboardLoader());
//     const { user } = thunkApi.extra.apiService;
//     const response = await user.get(getAddressesApi);
//     const responseData = response.data;
//     return responseData;
//   } catch (err) {
//     return Promise.reject();
//   } finally {
//     thunkApi.dispatch(stopDashboardLoader());
//   }
// };

// export const createBusinessProfile = async (data, thunkApi) => {
//   try {
//     thunkApi.dispatch(startDashboardLoader());
//     const { user } = thunkApi.extra.apiService;
//     const response = await user.post(addBusinessProfile, {
//       data: {
//         ...data,
//       },
//     });
//     thunkApi.dispatch(
//       showSuccessToast({
//         message: "business profile added successfully",
//         vertical: "top",
//         horizontal: "right",
//       })
//     );
//     return response.data;
//   } catch (err) {
//     thunkApi.dispatch(showFailureToast(err));
//     return Promise.reject(err);
//   } finally {
//     thunkApi.dispatch(stopDashboardLoader());
//   }
// };

// export const updateBusinessProfile = async (data, thunkApi) => {
//   try {
//     thunkApi.dispatch(startDashboardLoader());
//     const { user } = thunkApi.extra.apiService;

//     const response = await user.put(`${editBusinessProfile}`, {
//       data: {
//         ...data,
//       },
//     });

//     thunkApi.dispatch(
//       showSuccessToast({
//         message: response?.message,
//         vertical: "top",
//         horizontal: "right",
//       })
//     );
//     return response.data;
//   } finally {
//     thunkApi.dispatch(stopDashboardLoader());
//   }
// };

// export const updateUserProfileHandler = async (data, thunkApi) => {
//   const { user } = thunkApi.extra.apiService;
//   const response = await user.put(userApi, {
//     data: {
//       ...data,
//       ...data.mobile,
//       ...data.address,
//       address: undefined,
//       mobile: undefined,
//     },
//   });
//   thunkApi.dispatch(
//     showSuccessToast({
//       message: "User Profile updated successfully",
//       vertical: "top",
//       horizontal: "right",
//     })
//   );
//   return response.data;
// };

// export const createBusinessAddress = async (data, thunkApi) => {
//   try {
//     thunkApi.dispatch(startDashboardLoader());
//     const { user } = thunkApi.extra.apiService;
//     const response = await user.post(addBusinessAddress, data);
//     thunkApi.dispatch(
//       showSuccessToast({
//         message: response?.message,
//         vertical: "top",
//         horizontal: "right",
//       })
//     );
//     return response.data;
//   } catch (err) {
//     thunkApi.dispatch(showFailureToast(err));
//     return Promise.reject(err);
//   } finally {
//     thunkApi.dispatch(stopDashboardLoader());
//   }
// };

// export const updateBusinessAddress = async (data, thunkApi) => {
//   try {
//     thunkApi.dispatch(startDashboardLoader());
//     const { user } = thunkApi.extra.apiService;
//     const response = await user.put(`${editBusinessAddress}/${data.id}`, {
//       data: { ...data },
//     });
//     thunkApi.dispatch(
//       showSuccessToast({
//         message: response?.message,
//         vertical: "top",
//         horizontal: "right",
//       })
//     );
//     return response.data;
//   } catch (err) {
//     thunkApi.dispatch(showFailureToast(err));
//     return Promise.reject(err);
//   } finally {
//     thunkApi.dispatch(stopDashboardLoader());
//   }
// };

// export const deleteBusinessAddress = async (__, thunkApi) => {};

// export const uploadProfileHandler = async (data, thunkApi) => {
//   try {
//     thunkApi.dispatch(startDashboardLoader());
//     const { protectedAuthAxios } = thunkApi.extra.apiService;
//     const response = await protectedAuthAxios.post(uploadUserProfileApi, data);
//     thunkApi.dispatch(
//       showSuccessToast({
//         message: response?.message,
//         vertical: "top",
//         horizontal: "right",
//       })
//     );
//     return response.data;
//   } catch (err) {
//     thunkApi.dispatch(showFailureToast(err));
//     return Promise.reject(err);
//   } finally {
//     thunkApi.dispatch(stopDashboardLoader());
//   }
// };
