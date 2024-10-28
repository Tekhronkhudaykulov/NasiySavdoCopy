import { useMutation } from "@tanstack/react-query";
import { requests } from "../../helpers/requests";
import { setToken } from "../../helpers/api";

export const useSendPhone = () => {
  return useMutation({
    mutationFn: async (payload: any) => {
      const { data } = await requests.sendPhone(payload);
      setToken(data.data?.token);
      return data;
    },
  });
};

export const useSendCode = () => {
  return useMutation({
    mutationFn: async (payload: any) => {
      const { data } = await requests.sendCode(payload);
      setToken(data.data?.token);
      return data;
    },
  });
};
