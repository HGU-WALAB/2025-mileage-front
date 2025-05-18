import { Flex, Header, Main, PageErrorFallback } from '@/components';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { ProfileSection } from '@/pages/profile/ProfilePage/components/ProfileSection';
import { useMediaQuery } from '@mui/material';
import { ErrorBoundary } from 'react-error-boundary';

import { GithubGraphSection } from './components/GithubGraphSection';
import { IntroduceSection } from './components/IntroduceSection';

const ProfileSharePage = () => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);
  return (
    <Flex.Row justify="center">
      <Main open={false}>
        <Header />

      </Main>
    </Flex.Row>
  );
};

export default ProfileSharePage;
