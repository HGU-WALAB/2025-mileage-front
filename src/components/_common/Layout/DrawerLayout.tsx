import { Drawer, Header } from '@/components';
import styled from '@emotion/styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const DrawerLayout = () => {
  return (
    <S.LayoutContainer>
      <Drawer />
      <Header />
      <S.Wrapper>
        <GlobalSuspense>
          <Outlet />
        </GlobalSuspense>
      </S.Wrapper>
    </S.LayoutContainer>
  );
};

export default DrawerLayout;

const GlobalSuspense = ({ children }: { children: JSX.Element }) => (
  <Suspense fallback={<div style={{ height: '100vh' }}></div>}>{children}</Suspense>
);

const S = {
  LayoutContainer: styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-bottom: 2rem;
  `,
  Wrapper: styled.div`
    background-color: green;
    flex: 1;
  `,
};
