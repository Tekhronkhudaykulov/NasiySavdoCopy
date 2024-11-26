import { API_URL } from "../config";
import { $api } from "./api";

export const requests = {
  // Auth
  sendPhone: (payload: any) => $api.post(`${API_URL}/user/send-phone`, payload),
  sendCode: (payload: any) => $api.post(`${API_URL}/user/send-code`, payload),
  profile: () => $api.get(`${API_URL}/user/profile`),
  product: () => $api.get(`${API_URL}/product/index`),
  category: () => $api.get(`${API_URL}/category`),
  banner: () => $api.get(`${API_URL}/banner/index`),
  tagProduct: (payload: any) =>
    $api.get(`${API_URL}/product/by-tag?slug=${payload}`),
  addToBasket: (payload: any) => $api.post(`${API_URL}/cart/add`, payload),
  basketList: () => $api.get(`${API_URL}/cart`),
  minusToBasket: (payload: any) => $api.post(`${API_URL}/cart/minus`, payload),
  removeToBasket: (payload: any) =>
    $api.post(`${API_URL}/cart/remove`, payload),
  productDetail: (payload: any) =>
    $api.get(`${API_URL}/product/detail?id=${payload}`),

  similarProductFetch: (payload: any) =>
    $api.get(`${API_URL}/product/similar?id=${payload}`),


  productViewsList: () =>
    $api.get(`${API_URL}/product/recently-viewed`),
  addFavouriteList: (payload: any) =>
    $api.post(`${API_URL}/product/set-favorite`, payload),
  favouriteList: () => $api.get(`${API_URL}/product/favorites`),

  cardInfoFetch: () => $api.get(`${API_URL}/cart/info`),

  editProfileFetch: (payload: any) => $api.post(`${API_URL}/user/update`,payload),
  productByCategoryFetch: (payload: any) => $api.get(`${API_URL}/by-category?id=${payload}`),
  searchFetch: (payload: any) => $api.get(`/product/search?query=${payload}`),

};
