import { Flex, Heading } from '@/components';
import { HisnetLoginButton } from '@/components/Login';
import { RESPONSIVE_MAX_WIDTH } from '@/constants/system';
import { useMediaQuery } from '@mui/material';

const LoginSection = () => {
  const isMobile = useMediaQuery(RESPONSIVE_MAX_WIDTH);

  return (
    <Flex.Column
      height="100%"
      width={isMobile ? '100%' : '30%'}
      justify="space-between"
      align="center"
      padding={isMobile ? '0' : '0 1rem'}
      gap={isMobile ? '1rem' : 'none'}
    >
      <Heading as="h1">Login</Heading>
      <HisnetLoginButton />
    </Flex.Column>
  );
};

export default LoginSection;
