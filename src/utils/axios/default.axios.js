import axios from "axios";

const BASE_URL = process.env.REACT_APP_ACCOUNTS_DOMAIN;

export const defaultAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "X-Platform-Code": "admin"
  },
});

defaultAxios.interceptors.response.use(
  (response) => {
  
    if (response?.status) return response.data;
    return Promise.reject(response.message);
  },
  (error) => {
    const { response } = error;

    const mes = response?.data?.message || "Something Went Wrong";
    return Promise.reject(mes);
  }
);