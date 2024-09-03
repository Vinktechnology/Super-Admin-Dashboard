import { defaultAxios } from "../axios/default.axios";
import { userAxios } from "../axios/user.axios";
import {
  getAllActiveCategoryApi,
  getAllActiveSubCategoryApi,
  getAllActiveGenericMasterDataApi,
  getAllActiveTagsApi,
  fileUploadApi
} from "../apis.utils";

export const formatUserResponse = (response) => {
  return {
    email: response.email,
    username: response.fullName,
    // email_verify: response.email_verify,
    // isMobileVerified: response.mobile_verify,
    // designation: response.designation,
    // first_name: response.first_name,
    // last_name: response.last_name,
    // id: response.id,
    // address_line1: response.address_line1,
    // address_line2: response.address_line2,
    // zip_code: response.zip_code,
    // state: response.state,
    // country: response.country,
    // city: response.city,
    // imageUrl: response.profile_pic,
    // profiles: response.org_profiles,
    mobile: response.mobile,
  };
};

export const getAllCategoriesGlobalApi = () => {
  return userAxios.get(getAllActiveCategoryApi);
};

export const getAllTagsGlobalApi = () => {
  return userAxios.get(getAllActiveTagsApi);
};

export const getAllGenericMasterNamesGlobalApi = () => {
  return userAxios.get(getAllActiveGenericMasterDataApi);
};

export const getAllSubCategoriesGlobalApi = (api) => {
  return userAxios.get(getAllActiveSubCategoryApi + "?categoryIds=" + api);
};

export const productFileUploadGlobalApi = (data) => {
  return userAxios.post(fileUploadApi, data,{
    headers: {
      "Content-Type": undefined
    }});
};
