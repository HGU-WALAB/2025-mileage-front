import {
  Drawer,
  ErrorResetBoundary,
  Flex,
  Footer,
  Header,
  HeaderMobile,
  Main,
  NavigationBar,
} from '@/components';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { useDrawerStore } from '@/stores';
import { useMediaQuery } from '@mui/material';

const DrawerLayout = () => {
  const { isDrawerOpen } = useDrawerStore();
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);

  if (isMobile) return <MobileDrawerLayout />;
  return (
    <Flex.Column>
      <Drawer />
      <Flex.Row justify="center">
        <Main open={isDrawerOpen}>
          <Header />
          <ErrorResetBoundary />
          <Footer />
        </Main>
      </Flex.Row>
    </Flex.Column>
  );
};

export default DrawerLayout;

const MobileDrawerLayout = () => {
  return (
    <Flex.Column>
      <HeaderMobile />
      <Main open={false} isMobile={true}>
        <ErrorResetBoundary />
      </Main>
      <NavigationBar />
    </Flex.Column>
  );
};
