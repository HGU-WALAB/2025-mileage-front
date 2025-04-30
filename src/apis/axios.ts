import { BASE_URL } from '@/apis/config';
import { TOAST_MESSAGES } from '@/constants/toastMessage';
// import { useAuthStore } from '@/stores';
import { captureException } from '@sentry/react';
import axios from 'axios';
import { toast } from 'react-toastify';

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

    if (error.response && error.response.status === 401) {
      toast.error(TOAST_MESSAGES.failedAuth);
      // useAuthStore.getState().logout();
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
