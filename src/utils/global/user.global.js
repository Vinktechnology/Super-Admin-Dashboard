import { defaultAxios } from "../axios/default.axios";
import { setPasswordApi, validateTokenApi } from "../apis.utils";

export const formatUserResponse = (response) => {
  return {
    email: response.email,
    email_verify: response.email_verify,
    isMobileVerified: response.mobile_verify,
    username: response.username,
    designation: response.designation,
    first_name: response.first_name,
    last_name: response.last_name,
    id: response.id,
    address_line1: response.address_line1,
    address_line2: response.address_line2,
    zip_code: response.zip_code,
    state: response.state,
    country: response.country,
    city: response.city,
    imageUrl: response.profile_pic,
    mobile: {
      country_code: response.country_code,
      mobile_number: response.mobile_number,
    },
    profiles: response.org_profiles,
  };
};

export const validateToken = async (token) => {
  return defaultAxios.post(validateTokenApi, { code: token });
};

export const setPasswordHandler = (password, code) => {
  return defaultAxios.post(setPasswordApi, { password, code });
};
