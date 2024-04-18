import { useQuery } from "@tanstack/react-query";

import { QUERY_KEY } from "./query-key";

import { customAxios } from "../configs/axios.configs";

export const useLanguage = () => {
  return useQuery({
    queryKey: [QUERY_KEY.language],
    queryFn: async () =>
      await customAxios.get("language", {
        headers: {
          "accept-language": localStorage.getItem("language"),
        },
      }),
  });
};

export const useService = () => {
  return useQuery({
    queryKey: [QUERY_KEY.service],
    queryFn: async () =>
      await customAxios.get("service/find/all", {
        headers: {
          "accept-language": localStorage.getItem("language"),
        },
      }),
  });
};

export const useCareer = () => {
  return useQuery({
    queryKey: [QUERY_KEY.career],
    queryFn: async () =>
      await customAxios.get("career/find/all", {
        headers: {
          "accept-language": localStorage.getItem("language"),
        },
      }),
  });
};

export const useProject = () => {
  return useQuery({
    queryKey: [QUERY_KEY.project],
    queryFn: async () =>
      await customAxios.get("project/find/all", {
        headers: {
          "accept-language": localStorage.getItem("language"),
        },
      }),
  });
};

export const usePartners = () => {
  return useQuery({
    queryKey: [QUERY_KEY.partners],
    queryFn: async () => await customAxios.get("partners/find/all"),
  });
};
