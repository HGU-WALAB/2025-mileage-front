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

        <Flex.Column padding="1rem" gap="1rem">
          <ErrorBoundary FallbackComponent={PageErrorFallback}>

            <Flex.Row wrap={isMobile ? 'wrap' : 'nowrap'} gap="1rem">
              <GithubGraphSection />
            </Flex.Row>
          </ErrorBoundary>
        </Flex.Column>
      </Main>
    </Flex.Row>
  );
};

export default ProfileSharePage;
