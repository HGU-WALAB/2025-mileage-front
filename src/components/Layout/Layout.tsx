import { ErrorResetBoundary } from '@/components';
import { styled } from '@mui/material';

const Layout = () => {
  return (
    <S.Wrapper>
      <ErrorResetBoundary />
    </S.Wrapper>
  );
};

export default Layout;

const S = {
  Wrapper: styled('div')`
    height: 100dvh;
  `,
};
