/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInstance } from '@/apis/axios';
import { AxiosRequestConfig } from 'axios';

export const http = {
  get: async function get<Response = unknown>(
    url: string,
    options: AxiosRequestConfig = {},
  ) {
    const res = await axiosInstance.get<Response>(url, options);
    return res.data;
  },
  post: async function post<Request = any, Response = unknown>(
    url: string,
    data?: Request,
    config?: AxiosRequestConfig,
  ) {
    const res = await axiosInstance.post<Response>(url, data, config);
    return res.data;
  },
  put: async function put<Request = any, Response = unknown>(
    url: string,
    data?: Request,
    config?: AxiosRequestConfig,
  ) {
    const res = await axiosInstance.put<Response>(url, data, config);
    return res.data;
  },
  patch: async function patch<Request = any, Response = unknown>(
    url: string,
    data?: Request,
    config?: AxiosRequestConfig,
  ) {
    const res = await axiosInstance.patch<Response>(url, data, config);
    return res.data;
  },
  delete: async function remove<Response = unknown>(url: string) {
    const res = await axiosInstance.delete<Response>(url);
    return res.data;
  },
};
