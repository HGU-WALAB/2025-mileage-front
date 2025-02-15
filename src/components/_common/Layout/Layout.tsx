import { Header } from '@/components';
import ErrorResetBoundary from '@/components/_common/Error/ErrorResetBoundary';
import { styled } from '@mui/material';

const Layout = () => {
  return (
    <S.Wrapper>
      <Header />
      <ErrorResetBoundary />
    </S.Wrapper>
  );
};

export default Layout;

const S = {
  Wrapper: styled('div')`
    flex: 1;
    min-height: 100dvh;
  `,
};
