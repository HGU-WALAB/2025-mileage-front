import router from '@/router';
import useThemeStore from '@/stores/useThemeStore';
import { globalStyle } from '@/styles/global';
import { darkTheme, lightTheme } from '@/styles/theme';
import { ErrorResponse } from '@/types/error';
import { Global } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { RouterProvider } from 'react-router-dom';

const App = () => {
  const themeMode = useThemeStore(state => state.themeMode);
  const queryClient = new QueryClient({
    defaultOptions: {
      mutations: {
        onError: error => {
          if ((error as AxiosError).isAxiosError) {
            const axiosError = error as AxiosError;
            const errorData = axiosError.response?.data as ErrorResponse;

            if (errorData) {
              alert(errorData.message);
            }
          }
        },
      },
      queries: {
        staleTime: 5 * 60 * 1000,
        throwOnError: true,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
        <Global styles={globalStyle} />
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
