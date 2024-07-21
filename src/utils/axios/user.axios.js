import axios from "axios";
import { getAccessToken, getOrgId } from "../global/auth.global";

const BASE_URL = process.env.REACT_APP_API_DOMAIN;

export const userAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

userAxios.interceptors.request.use((request) => {
  const token = getAccessToken();
  const orgid = getOrgId();
  request.headers["Authorization"] = token ? "Bearer " + token : "";
  request.headers["orgid"] = orgid;
  return request;
});

userAxios.interceptors.response.use(
  (response) => {
    if (response.data?.status === 1) return response.data;
    return Promise.reject(response.data?.err);
  },
  (error) => {
    const { response } = error;

    const message = response?.data?.err || "Something Went Wrong";
    return Promise.reject(message);
  }
);
