import { Flex } from '@/components';
import { HisnetLoginButton } from '@/components/Landing';

const LoginSection = () => {
  return (
    <Flex.Column
      height="100%"
      width="30%"
      justify="space-between"
      align="center"
      padding="3rem"
    >
      CSEE 로고
      <HisnetLoginButton />
    </Flex.Column>
  );
};

export default LoginSection;
