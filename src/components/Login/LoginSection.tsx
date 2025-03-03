import { Flex, Heading } from '@/components';
import { HisnetLoginButton } from '@/components/Login';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { styled, useMediaQuery } from '@mui/material';

const LoginSection = () => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);

  return (
    <Flex.Column
      width={isMobile ? '100%' : '30%'}
      justify="space-between"
      padding={isMobile ? '0' : '0 1rem'}
      gap="1rem"
    >
      <S.Text as="h1">히즈넷 로그인</S.Text>
      <HisnetLoginButton />
    </Flex.Column>
  );
};

export default LoginSection;

const S = {
  Text: styled(Heading)`
    ${({ theme }) => theme.typography.h1}
    color: ${({ theme }) => theme.palette.white};
  `,
};
