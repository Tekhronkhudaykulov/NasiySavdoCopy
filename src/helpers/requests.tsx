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

  // sendCode: (payload: any) =>
  //   $api.post(`${API_URL}/api/v1/clients/send-code`, payload),
  // signIn: (payload: any) =>
  //   $api.post(`${API_URL}/api/v1/clients/sign-in`, payload),
  // signOut: (payload: any) =>
  //   $api.post(`${API_URL}/api/v1/clients/sign-out`, payload),
  // resendCode: (payload: any) =>
  //   $api.post(`${API_URL}/api/v1/clients/resend-code`, payload),
  // info: () => $api.get(`${API_URL}/api/v1/clients/info`),

  // //Product
  // product: () => $api.get(`${API_URL}/api/v1/products`),

  // // News
  // news: () => $api.get(`${API_URL}/api/v1/news`),
  // newsDetail: (id: number) =>
  //   $api.get(`${API_URL}/api/v1/news/detail?id=${id}`),
  // tags: () => $api.get(`${API_URL}/api/v1/news/tags`),
  // // banners

  // banners: () => $api.get(`${API_URL}/api/v1/banners`),

  // // services
  // services: () => $api.get(`${API_URL}/api/v1/services`),
  // serviceDetail: (id: number) =>
  //   $api.get(`${API_URL}/api/v1/services/detail?id=${id}`),

  // // brands
  // brands: () => $api.get(`${API_URL}/api/v1/brands`),

  // // categories
  // categories: () => $api.get(`${API_URL}/api/v1/categories`),

  // // compares products
  // compares: () => $api.get(`${API_URL}/api/v1/compare-products`),
  // addCompares: (product_variant_id: number) =>
  //   $api.post(`${API_URL}/api/v1/compare-products/add`, product_variant_id),

  // // product variants

  // productVariants: () => $api.get(`${API_URL}/api/v1/product-variants`),
  // productVariantsDetail: (id: number) =>
  //   $api.get(`${API_URL}/api/v1/product-variants/detail?id=${id}`),
  // productVariantsFilter: () =>
  //   $api.get(
  //     `${API_URL}/api/v1/product-variants/category-products?id=6&option_values[0]=22`
  //   ),
  // productVariantsCategoryFilter: () =>
  //   $api.get(`${API_URL}/api/v1/product-variants/category-filters?id=6`),
  // productVariantsByWith: () =>
  //   $api.get(`${API_URL}/api/v1/product-variants/buy-with?id=1`),

  // // favourites
  // clientFavourites: () => $api.get(`${API_URL}/api/v1/client-favorites`),
  // clientFavouritesAdd: (product_variant_id: number) =>
  //   $api.post(`${API_URL}/api/v1/client-favorites/add`, product_variant_id),
  // clientFavouritesDelete: (product_variant_id: number) =>
  //   $api.post(`${API_URL}/api/v1/client-favorites/delete`, product_variant_id),
  // clientFavouritesClear: (product_variant_id: number) =>
  //   $api.post(`${API_URL}/api/client-favorites/clear`, product_variant_id),

  // // clients carts
  // clientCartList: () => $api.get(`${API_URL}/api/v1/client-carts`),
  // clientCartAddList: () => $api.post(`${API_URL}/api/v1/client-carts/add`),
  // clientCartDeleteList: () =>
  //   $api.post(`${API_URL}/api/v1/client-carts/delete`),
  // clientCartAddToOrder: () =>
  //   $api.post(`${API_URL}/api/v1/client-carts/to-order`),
  // clientCartDeleteSelected: () =>
  //   $api.post(`${API_URL}/api/v1/client-carts/delete-selected`),
};
