import { Flex } from '@/components';
import { LoginSection, LogoSection, NoticeCard } from '@/components/Login';
import { boxShadow } from '@/styles/common';
import { getOpacityColor } from '@/utils/getOpacityColor';
import { styled } from '@mui/material';

const LoginPage = () => {
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

export default LoginPage;

const S = {
  GlassContainer: styled(Flex)`
    backdrop-filter: blur(1.875rem);
    background-color: ${({ theme }) =>
      getOpacityColor(theme.palette.white, 0.1)};
    border-radius: 1rem;
    ${boxShadow}
  `,
};
