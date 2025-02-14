import { Header } from '@/components';
import { styled } from '@mui/material';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <S.Wrapper>
      <Header />
      <GlobalSuspense>
        <Outlet />
      </GlobalSuspense>
    </S.Wrapper>
  );
};

export default Layout;

const GlobalSuspense = ({ children }: { children: JSX.Element }) => (
  <Suspense fallback={<div style={{ height: '100vh' }}></div>}>
    {children}
  </Suspense>
);

const S = {
  Wrapper: styled('div')`
    flex: 1;
    min-height: 100dvh;
  `,
};
