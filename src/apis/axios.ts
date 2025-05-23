import { BASE_URL } from '@/apis/config';
import { TOAST_MESSAGES } from '@/constants/toastMessage';
import { useAuthStore } from '@/stores';
import { captureException } from '@sentry/react';
import axios from 'axios';
import { toast } from 'react-toastify';

const forceRedirectToLogin = () => {
  useAuthStore.getState().logout();

  // 강제 리다이렉트
  window.location.pathname = '/mileage/';
};

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
      toast.error(TOAST_MESSAGES.failedAuth, {
        toastId: 'auth-error-toast',
      });

      forceRedirectToLogin();
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
