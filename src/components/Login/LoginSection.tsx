import { Flex, Heading } from '@/components';
import { HisnetLoginButton } from '@/components/Login';

const LoginSection = () => {
  return (
    <Flex.Column
      height="100%"
      width="30%"
      justify="space-between"
      align="center"
      padding="0 1rem"
    >
      <Heading as="h1">Login</Heading>
      <HisnetLoginButton />
    </Flex.Column>
  );
};

export default LoginSection;
