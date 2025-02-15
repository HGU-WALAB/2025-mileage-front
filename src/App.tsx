import router from '@/router';
import useThemeStore from '@/stores/useThemeStore';
import { globalStyle } from '@/styles/global';
import { darkTheme, lightTheme } from '@/styles/theme';
import { Global } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';

const App = () => {
  const themeMode = useThemeStore(state => state.themeMode);
  const queryClient = new QueryClient({
    defaultOptions: {
      mutations: { throwOnError: true },
      queries: { throwOnError: true },
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
