import i18n from "../i18/i18n";

import axios from "axios";


export const imgUrl = "https://api.nasiyasavdo.uz";

export const $api = axios.create({
  baseURL: "https://api.nasiyasavdo.uz/api",
});


  $api.interceptors.response.use(
    (response: any) => response,
    (error: any) => {
      if (error.response?.status === 401) {
       localStorage.clear();
      }
      return Promise.reject(error);
    }
  );

$api.defaults.headers.common["Accept"] = "application/json";

export const tokenName = "nasiyaSavdoAccessToken";

export const initApp = () => {
  const token = localStorage.getItem(tokenName);
  $api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const setToken = (token: any) => {
  localStorage.setItem(tokenName, token);
  $api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeToken = () => {
  localStorage.removeItem(tokenName);
  $api.defaults.headers.common.Authorization = ``;
};

// Language
$api.interceptors.request.use((config) => {
  config.headers["Accept-Language"] = i18n.language.toLowerCase();
  return config;
});

export const changeLanguage = (lng: string) => {
  i18n.changeLanguage(lng);
  localStorage.setItem("proboxLanguage", lng);
  $api.defaults.headers.common["Accept-Language"] = lng;
};

export const isAuthenticated = () => {
  const token = localStorage.getItem("proboxToken");
  return token !== null;
};
