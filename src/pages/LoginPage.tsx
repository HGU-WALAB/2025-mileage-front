import { Flex } from '@/components';
import { LoginSection, LogoSection, NoticeCard } from '@/components/Login';
import { ROUTE_PATH } from '@/constants/routePath';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { useAuthStore } from '@/stores';
import { boxShadow } from '@/styles/common';
import { getOpacityColor } from '@/utils/getOpacityColor';
import { styled, useMediaQuery } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const { isLogin } = useAuthStore();
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);

  useEffect(() => {
    if (isLogin) {
      navigate(ROUTE_PATH.dashboard);
    }
  }, [isLogin, navigate]);

  if (isMobile) <MobileLoginPage />;

  return (
    <Flex.Column justify="center" align="center" height="100%">
      <S.GlassContainer
        justify="center"
        align="center"
        width="80%"
        height="80%"
        padding="1rem"
        gap="1rem"
        wrap="wrap"
      >
        <Flex.Column gap="1rem">
          <LogoSection />
          <NoticeCard />
        </Flex.Column>

        <LoginSection />
      </S.GlassContainer>
    </Flex.Column>
  );
};

export default LoginPage;

const MobileLoginPage = () => {
  return (
    <Flex.Column justify="center" align="center" height="100%">
      <S.GlassContainer
        justify="center"
        align="center"
        width="90%"
        height="40%"
      >
        <Flex.Column gap="1rem" width="90%">
          <LogoSection />
          <LoginSection />
        </Flex.Column>
      </S.GlassContainer>
    </Flex.Column>
  );
};

const S = {
  GlassContainer: styled(Flex.Row)`
    backdrop-filter: blur(1.875rem);
    background-color: ${({ theme }) =>
      getOpacityColor(theme.palette.white, 0.2)};
    border-radius: 1rem;
    ${boxShadow}
  `,
};
