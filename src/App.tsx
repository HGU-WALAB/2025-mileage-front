import router from '@/router';
import { globalStyle } from '@/styles/global';
import theme from '@/theme';
import { Global, ThemeProvider } from '@emotion/react';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyle} />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
