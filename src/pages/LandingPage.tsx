import { Flex } from '@/components';
import { LoginSection, NoticeCard } from '@/components/Landing';

const LandingPage = () => {
  return (
    <Flex.Column justify="center" align="center" width="100dwv" height="100dvh">
      <Flex.Row justify="center" align="center" width="60%" height="40%">
        <NoticeCard />
        <LoginSection />
      </Flex.Row>
    </Flex.Column>
  );
};

export default LandingPage;
