import { Flex } from '@/components';
import { LoginSection, NoticeCard } from '@/components/Landing';
import { ROUTE_PATH } from '@/constants/routePath';
import { useAuthStore } from '@/stores';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const { isLogin } = useAuthStore();

  useEffect(() => {
    if (isLogin) {
      navigate(ROUTE_PATH.dashboard);
    }
  }, [isLogin, navigate]);

  return (
    <Flex.Column justify="center" align="center" width="100%" height="80dvh">
      <Flex.Row justify="center" align="center" width="60%" height="40%">
        <NoticeCard />
        <LoginSection />
      </Flex.Row>
    </Flex.Column>
  );
};

export default LandingPage;
