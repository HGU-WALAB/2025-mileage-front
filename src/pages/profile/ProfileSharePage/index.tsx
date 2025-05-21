import { Flex, Footer, Header, Main, PageErrorFallback } from '@/components';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { useTrackPageView } from '@/service/amplitude/useTrackPageView';
import { useMediaQuery } from '@mui/material';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { GithubGraphSection } from './components/GithubGraphSection';
import { IntroduceSection } from './components/IntroduceSection';
import { ProfileSection } from './components/ProfileSection';
import { SectionGrid } from './components/SectionGrid';

const ProfileSharePage = () => {
  useTrackPageView({ eventName: '[View] 공유 프로필 페이지' });
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);

  return (
    <Flex.Row justify="center">
      <Main open={false}>
        <Header headerTitle={'프로필'} />

        <ErrorBoundary FallbackComponent={PageErrorFallback}>
          <Flex.Column padding="1rem" gap="1rem">
            <ProfileSection />

            <Flex.Row wrap={isMobile ? 'wrap' : 'nowrap'} gap="1rem">
              <Suspense>
                <IntroduceSection />
              </Suspense>

              <Suspense>
                <GithubGraphSection />
              </Suspense>
            </Flex.Row>

            <SectionGrid />
          </Flex.Column>
        </ErrorBoundary>

        <Footer />
      </Main>
    </Flex.Row>
  );
};

export default ProfileSharePage;
