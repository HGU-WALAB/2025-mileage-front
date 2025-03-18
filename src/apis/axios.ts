import { BASE_URL } from '@/apis/config';
import { captureException } from '@sentry/react';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 500) {
      captureException(error);
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
