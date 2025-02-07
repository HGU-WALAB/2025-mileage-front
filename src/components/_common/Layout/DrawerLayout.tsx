import { Drawer, Flex, Header, Main } from '@/components';
import { useDrawerStore } from '@/stores';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const DrawerLayout = () => {
  const { isDrawerOpen } = useDrawerStore();

  return (
    <Flex.Column margin="0 0 2rem 0">
      <Drawer />
      <Header />
      <Main open={isDrawerOpen}>
        <GlobalSuspense>
          <Outlet />
        </GlobalSuspense>
      </Main>
    </Flex.Column>
  );
};

export default DrawerLayout;

const GlobalSuspense = ({ children }: { children: JSX.Element }) => (
  <Suspense fallback={<div style={{ height: '100vh' }}></div>}>{children}</Suspense>
);
