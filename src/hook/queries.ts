import { useQuery, useQueryClient } from "@tanstack/react-query";
import { requests } from "../helpers/requests";
import { errorSlice } from "../store";

export const profileQuery = () =>
  useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const { data } = await requests.profile();
      return data.data;
    },
    staleTime: 0,
    refetchOnMount: true,
  });

// export const productQuery = () =>
//   useQuery({
//     queryKey: ["product"],
//     queryFn: async () => {
//       const { data } = await requests.product();
//       return data.data;
//     },
//   });

// export const productQuery = async () => {
//   const { data } = await requests.product();
//   return data.data;
// };

export const productQuery = (payload: any) =>
  useQuery({
    queryKey: ["productQuery", payload],
    queryFn: async () => {
      const { data } = await requests.product(payload);
      return data;
    },
    enabled: !!payload,
  });

export const categoryQuery = () =>
  useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const { data } = await requests.category();
      return data.data;
    },
  });

export const bannerQuery = () =>
  useQuery({
    queryKey: ["banner"],
    queryFn: async () => {
      const { data } = await requests.banner();
      return data.data;
    },
  });

export const productByTagQuery = (payload: string, page: any) =>
  useQuery({
    queryKey: ["productByTag", payload, page],
    queryFn: async () => {
      const { data } = await requests.tagProduct({ slug: payload, page });
      return data;
    },
    enabled: !!payload && page !== undefined,
  });

export const productByCategory = (payload: any) =>
  useQuery({
    queryKey: ["categoryProd" + payload],
    queryFn: async () => {
      const { data } = await requests.productByCategoryFetch(payload);
      return data;
    },
    enabled: !!payload,
  });

export const add = async (payload: any) => {
  const { data } = await requests.addToBasket(payload);
  return data;
};

export const getBasketList = async () => {
  const { data } = await requests.basketList();
  return data.data;
};

export const minus = async (payload: any) => {
  const { data } = await requests.minusToBasket(payload);
  return data;
};

export const remove = async (payload: any) => {
  const { data } = await requests.removeToBasket(payload);
  return data;
};

export const productDetail = (payload: any) =>
  useQuery({
    queryKey: ["detail" + payload],
    queryFn: async () => {
      const { data } = await requests.productDetail(payload);
      return data.data;
    },
  });

export const similarProduct = (payload: any) =>
  useQuery({
    queryKey: ["similar" + payload],
    queryFn: async () => {
      const { data } = await requests.similarProductFetch(payload);
      return data.data;
    },
  });

export const productViews = () =>
  useQuery({
    queryKey: ["productViews"],
    queryFn: async () => {
      const { data } = await requests.productViewsList();
      return data.data;
    },
  });
export const addFavourites = async (payload: any) => {
  const { data } = await requests.addFavouriteList(payload);
  return data;
};

// export const getFavouriteList = () =>
//   useQuery({
//     queryKey: ["favouriteList"],
//     queryFn: async () => {
//       const { data } = await requests.favouriteList();
//       return data.data;
//     },
// });

export const getFavouriteList = async () => {
  const { data } = await requests.favouriteList();
  return data.data;
};

export const cardInfo = async () => {
  const { data } = await requests.cardInfoFetch();
  return data;
};

export const editProfile = async (payload: any) => {
  const { data } = await requests.editProfileFetch(payload);
  return data.client;
};

export const productSearch = (payload: any) =>
  useQuery({
    queryKey: ["search" + payload],
    queryFn: async () => {
      const { data } = await requests.searchFetch(payload);
      return data.data;
    },
    enabled: !!payload,
  });

export const delivery = () =>
  useQuery({
    queryKey: ["delivery"],
    queryFn: async () => {
      const { data } = await requests.deliveryFetch();
      return data.data;
    },
  });

export const cities = () =>
  useQuery({
    queryKey: ["cities"],
    queryFn: async () => {
      const { data } = await requests.citiesFetch();
      return data.data;
    },
  });

export const regions = (payload: any) =>
  useQuery({
    queryKey: ["regions" + payload],
    queryFn: async () => {
      const { data } = await requests.regionsFetch(payload);
      return data.data;
    },
    enabled: !!payload,
  });

export const paymentType = () =>
  useQuery({
    queryKey: ["paymentType"],
    queryFn: async () => {
      const { data } = await requests.paymentTypeFetch();
      return data.data;
    },
  });
export const tariffs = () =>
  useQuery({
    queryKey: ["tarrifs"],
    queryFn: async () => {
      const { data } = await requests.tarrifFetch();
      return data;
    },
  });

export const tags = () =>
  useQuery({
    queryKey: ["tags"],
    queryFn: async () => {
      const { data } = await requests.tagsFetch();
      return data;
    },
  });

export const sendOrder = async (payload: any) => {
  const { data } = await requests.sendOrderFetch(payload);
  return data;
};

export const reviewsDetail = (payload: any) =>
  useQuery({
    queryKey: ["reviewsDetail" + payload],
    queryFn: async () => {
      const { data } = await requests.reviewsDetailFetch(payload);
      return data;
    },
    enabled: !!payload,
  });

export const subCategory = (payload: any) =>
  useQuery({
    queryKey: ["subCategory" + payload],
    queryFn: async () => {
      const { data } = await requests.subCategoryFetch(payload);
      return data.data;
    },
    enabled: !!payload,
  });

// export const getOrders = () =>
//   useQuery({
//     queryKey: ["orderList"],
//     queryFn: async () => {
//       const { data } = await requests.getOrdersFetch();
//       return data.data;
//     },
//   });

export const getOrders = async () => {
  const { data } = await requests.getOrdersFetch();
  return data.data;
};

export const clientCard = async (payload: any) => {
  const { data } = await requests.clientCardFetch(payload);
  return data;
};

export const sendVerify = async (payload: any) => {
  const { data } = await requests.sendVerifyFetch(payload);
  return data;
};

export const resendVerify = async (payload: any) => {
  const { data } = await requests.resendVerifyFetch(payload);
  return data;
};

export const allClientCard = () =>
  useQuery({
    queryKey: ["clientCardList"],
    queryFn: async () => {
      const { data } = await requests.allClientCardFetch();
      return data.data;
    },
  });

export const setCompare = async (payload: any) => {
  const { data } = await requests.setCompareFetch(payload);
  return data;
};

export const compare = () =>
  useQuery({
    queryKey: ["compareList"],
    queryFn: async () => {
      const { data } = await requests.compareFetch();
      return data.data;
    },
  });

export const productTariffs = (payload: any) =>
  useQuery({
    queryKey: ["prodTariffs" + payload],
    queryFn: async () => {
      const { data } = await requests.productTariffsFetch(payload);
      return data;
    },
    enabled: !!payload,
  });

export const addAdress = async (payload: any) => {
  const { data } = await requests.setAddAdressFetch(payload);
  return data;
};

export const filter = (payload: any) =>
  useQuery({
    queryKey: ["filter" + payload],
    queryFn: async () => {
      const { data } = await requests.filterFetch(payload);
      return data;
    },
    enabled: !!payload,
  });

export const adresList = () =>
  useQuery({
    queryKey: ["addressList"],
    queryFn: async () => {
      const { data } = await requests.addresListFetch();

      return data.data;
    },
  });

  export const contracts = () =>
    useQuery({
      queryKey: ["contracts"],
      queryFn: async () => {
        const { data } = await requests.contractsFetch();
        return data;
      },
    });


