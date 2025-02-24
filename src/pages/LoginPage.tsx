import { Flex } from '@/components';
import { LoginSection, LogoSection, NoticeCard } from '@/components/Login';
import { ROUTE_PATH } from '@/constants/routePath';
import { useAuthStore } from '@/stores';
import { boxShadow } from '@/styles/common';
import { getOpacityColor } from '@/utils/getOpacityColor';
import { styled } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const { isLogin } = useAuthStore();

  useEffect(() => {
    if (isLogin) {
      navigate(ROUTE_PATH.dashboard);
    }
  }, [isLogin, navigate]);

  return (
    <Flex.Column justify="center" align="center" height="100%">
      <S.GlassContainer
        justify="center"
        align="center"
        width="80%"
        height="80%"
      >
        <Flex.Row
          justify="center"
          align="center"
          width="80%"
          height="50%"
          gap="2rem"
        >
          <Flex.Column gap="1rem">
            <LogoSection />
            <NoticeCard />
          </Flex.Column>

          <LoginSection />
        </Flex.Row>
      </S.GlassContainer>
    </Flex.Column>
  );
};

export default LoginPage;

const S = {
  GlassContainer: styled(Flex)`
    backdrop-filter: blur(1.875rem);
    background-color: ${({ theme }) =>
      getOpacityColor(theme.palette.white, 0.2)};
    border-radius: 1rem;
    ${boxShadow}
  `,
};
