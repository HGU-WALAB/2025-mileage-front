import { ErrorResetBoundary, Header } from '@/components';
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
