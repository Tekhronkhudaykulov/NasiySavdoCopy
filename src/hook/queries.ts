import { useQuery } from "@tanstack/react-query";
import { requests } from "../helpers/requests";

export const profileQuery = () =>
  useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const { data } = await requests.profile();
      return data.data;
    },
  });

export const productQuery = () =>
  useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const { data } = await requests.product();
      return data.data;
    },
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

export const productByTagQuery = (payload: string) =>
  useQuery({
    queryKey: [payload],
    queryFn: async () => {
      const { data } = await requests.tagProduct(payload);
      return data.data;
    },
  });

export const add = async (payload: any) => {
  const { data } = await requests.addToBasket(payload);
  return data;
};

export const getBasketList = async () => {
  const { data } = await requests.basketList();
  return data.data;
};
