import { LogoIcon } from '@/assets';
import { Flex, Heading } from '@/components';

const LogoSection = () => {
  return (
    <Flex.Row align="center" gap="1rem">
      <LogoIcon width={60} height={60} />
      <Heading as="h1" style={{ fontSize: '3rem' }}>
        CSEE Mileage
      </Heading>
    </Flex.Row>
  );
};

export default LogoSection;
