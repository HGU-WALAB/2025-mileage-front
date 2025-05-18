import { Flex, Footer, Header, Main, PageErrorFallback } from '@/components';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { useMediaQuery } from '@mui/material';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { GithubGraphSection } from './components/GithubGraphSection';
import { IntroduceSection } from './components/IntroduceSection';
import { ProfileSection } from './components/ProfileSection';
import { SectionGrid } from './components/SectionGrid';

const ProfileSharePage = () => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);
  return (
    <Flex.Row justify="center">
      <Main open={false}>
        <Header headerTitle={'프로필'} />

        <Flex.Column padding="1rem" gap="1rem">
          <ErrorBoundary FallbackComponent={PageErrorFallback}>
            <Suspense>
              <ProfileSection />
            </Suspense>

            <Flex.Row wrap={isMobile ? 'wrap' : 'nowrap'} gap="1rem">
              <Suspense>
                <IntroduceSection />
              </Suspense>

              <Suspense>
                <GithubGraphSection />
              </Suspense>
            </Flex.Row>
          </ErrorBoundary>

          <SectionGrid />
        </Flex.Column>

        <Footer />
      </Main>
    </Flex.Row>
  );
};

export default ProfileSharePage;
