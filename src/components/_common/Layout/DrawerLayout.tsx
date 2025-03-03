import { Drawer, ErrorResetBoundary, Flex, Header, Main } from '@/components';
import { RESPONSIVE_MAX_WIDTH } from '@/constants/system';
import { useDrawerStore } from '@/stores';
import { useMediaQuery } from '@mui/material';
import { useEffect } from 'react';

const DrawerLayout = () => {
  const { isDrawerOpen, setIsDrawerOpen } = useDrawerStore();
  const isMobile = useMediaQuery(RESPONSIVE_MAX_WIDTH);

  useEffect(() => {
    setIsDrawerOpen(!isMobile);
  }, [isMobile, setIsDrawerOpen]);

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
