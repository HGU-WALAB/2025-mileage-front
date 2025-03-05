import {
  Drawer,
  ErrorResetBoundary,
  Flex,
  Header,
  HeaderMobile,
  Main,
  NavigationBar,
} from '@/components';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { useDrawerStore } from '@/stores';
import { useMediaQuery } from '@mui/material';
import { useEffect } from 'react';

const DrawerLayout = () => {
  const { isDrawerOpen, setIsDrawerOpen } = useDrawerStore();
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);

  useEffect(() => {
    setIsDrawerOpen(!isMobile);
  }, [isMobile, setIsDrawerOpen]);

  if (isMobile)
    return (
      <Flex.Column>
        <HeaderMobile />
        <Flex.Row justify="center">
          <Main open={false}>
            <ErrorResetBoundary />
          </Main>
        </Flex.Row>
        <NavigationBar />
      </Flex.Column>
    );

  return (
    <Flex.Column>
      <Drawer />
      <Flex.Row justify="center">
        <Main open={isDrawerOpen}>
          <Header />
          <ErrorResetBoundary />
        </Main>
      </Flex.Row>
    </Flex.Column>
  );
};

export default DrawerLayout;
