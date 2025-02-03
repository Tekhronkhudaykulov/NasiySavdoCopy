import { API_URL } from "../config";
import { $api } from "./api";

export const requests = {
  // Auth
  sendPhone: (payload: any) => $api.post(`${API_URL}/user/send-phone`, payload),
  sendCode: (payload: any) => $api.post(`${API_URL}/user/send-code`, payload),
  profile: () => $api.get(`${API_URL}/user/profile`),
  product: (page:any) => $api.get(`${API_URL}/product/index?page=${page}`),
  category: () => $api.get(`${API_URL}/category`),
  banner: () => $api.get(`${API_URL}/banner/index`),
  tagProduct: (payload: { slug: string; page: number }) =>
    $api.get(`${API_URL}/product/by-tag?slug=${payload.slug}&page=${payload.page}`),
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
  productByCategoryFetch: (payload: any) => $api.get(`${API_URL}/product/by-category?id=${payload}`),
  searchFetch: (payload: any) => $api.get(`/product/search?query=${payload}`),
  deliveryFetch: () => $api.get(`/delivery/index`),
  citiesFetch: () => $api.get(`/order/cities`),
  regionsFetch: (payload: any) => $api.get(`/order/regions?id=${payload}`),
  paymentTypeFetch: () => $api.get(`/order/payment-types`),
  tarrifFetch: () => $api.get(`/order/tariffs`),
  tagsFetch: () => $api.get(`/product/tags`),

  sendOrderFetch: (payload: any) => $api.post(`${API_URL}/order/send`,payload),

  reviewsDetailFetch: (payload: number) => $api.get(`/product/reviews?product_id=${payload}`),
  getOrdersFetch: () => $api.get(`order/index`),
  subCategoryFetch:  (payload: number) => $api.get(`/category/sub-category?id=${payload}`),

  clientCardFetch: (payload: any) => $api.post(`${API_URL}/client-card/send`,payload),

  sendVerifyFetch: (payload: any) => $api.post(`${API_URL}/client-card/send-verify-code`,payload),

  resendVerifyFetch: (payload: any) => $api.post(`${API_URL}/resend-verify`,payload),

  allClientCardFetch: () => $api.get(`client-card`),

  setCompareFetch: (payload: any) => $api.post(`${API_URL}/product/set-compare`,payload),

 compareFetch: () => $api.get(`product/compares`),

 productTariffsFetch:  (payload: number) => $api.get(`/product/tariffs?id=${payload}`),

 setAddAdressFetch: (payload: any) => $api.post(`${API_URL}/user/add-address`,payload),

 addresListFetch: () => $api.get(`user/addresses`),

 filterFetch: (payload: any) => $api.get(`${API_URL}/category/filter?category_id=${payload}`),


 
  






};
