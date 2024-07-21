import { ACCESS_TOKEN, ORG_ID } from "../constant";

export const storeAccessToken = (token) =>
  localStorage.setItem(ACCESS_TOKEN, token);

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);

export const removeAccessToken = () => {
  localStorage.removeItem(ACCESS_TOKEN);
};

export const storeOrgId = (token) => localStorage.setItem(ORG_ID, token);

export const getOrgId = () => localStorage.getItem(ORG_ID);

export const removeOrgId = () => {
  localStorage.removeItem(ORG_ID);
};
