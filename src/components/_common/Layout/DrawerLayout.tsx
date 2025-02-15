import { Drawer, Flex, Header, Main } from '@/components';
import ErrorResetBoundary from '@/components/_common/Error/ErrorResetBoundary';
import { useDrawerStore } from '@/stores';

const DrawerLayout = () => {
  const { isDrawerOpen } = useDrawerStore();

  return (
    <Flex.Column margin="0 0 2rem 0">
      <Drawer />
      <Header />
      <Flex.Row justify="center">
        <Main open={isDrawerOpen}>
          <ErrorResetBoundary />
        </Main>
      </Flex.Row>
    </Flex.Column>
  );
};

export default DrawerLayout;
