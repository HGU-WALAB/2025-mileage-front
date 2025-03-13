import router from '@/router';
import { useThemeStore } from '@/stores';
import { globalStyle } from '@/styles/global';
import { darkTheme, lightTheme } from '@/styles/theme';
import '@/styles/toast.css';
import { ErrorResponse } from '@/types/error';
import { getErrorMessage } from '@/utils/getErrorMessage';
import { Global } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { RouterProvider } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError: error => {
        if ((error as AxiosError).isAxiosError) {
          const axiosError = error as AxiosError;
          const errorData = axiosError.response?.data as ErrorResponse;

          if (errorData) {
            toast.error(errorData.message);
          } else toast.error(getErrorMessage(error.name));
        }
      },
    },
    queries: {
      staleTime: 5 * 60 * 1000,
    },
  },
});

const App = () => {
  const themeMode = useThemeStore(state => state.themeMode);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={themeMode === 'dark' ? darkTheme : lightTheme}>
        <Global styles={globalStyle} />
        <ToastContainer
          autoClose={2000}
          position="top-center"
          hideProgressBar={true}
          className="custom-toast-container"
        />
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
