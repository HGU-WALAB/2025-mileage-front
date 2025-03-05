import { Drawer, ErrorResetBoundary, Flex, Header, Main } from '@/components';
import { useDrawerStore } from '@/stores';

const DrawerLayout = () => {
  const { isDrawerOpen } = useDrawerStore();

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
