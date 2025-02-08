import styled from '@emotion/styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <S.Wrapper>
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
  Wrapper: styled.div`
    flex: 1;
    min-height: 100dvh;
  `,
};
