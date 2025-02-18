import { Flex } from '@/components';
import { LoginSection, LogoSection, NoticeCard } from '@/components/Login';
import { boxShadow } from '@/styles/common';
import { getOpacityColor } from '@/utils/getOpacityColor';
import { styled } from '@mui/material';

const LandingPage = () => {
  // const navigate = useNavigate();
  // const { isLogin } = useAuthStore();

  // useEffect(() => {
  //   if (isLogin) {
  //     navigate(ROUTE_PATH.dashboard);
  //   }
  // }, [isLogin, navigate]);

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
          <Flex.Column width="70%">
            <LogoSection />
            <NoticeCard />
          </Flex.Column>
          <LoginSection />
        </Flex.Row>
      </S.GlassContainer>
    </Flex.Column>
  );
};

export default LandingPage;

const S = {
  GlassContainer: styled(Flex)`
    backdrop-filter: blur(1.875rem);
    background-color: ${({ theme }) =>
      getOpacityColor(theme.palette.white, 0.1)};
    border-radius: 1rem;
    ${boxShadow}
  `,
};
