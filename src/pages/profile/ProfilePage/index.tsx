import { Flex, PageErrorFallback } from '@/components';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { useTrackPageView } from '@/service/amplitude/useTrackPageView';
import { useMediaQuery } from '@mui/material';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { IntroduceSkeleton } from '../components/IntroduceSkeleton';
import { ProfileSkeleton } from '../components/ProfileSkeleton';
import { GithubGraphSection } from './components/GithubGraphSection';
import { IntroduceSection } from './components/IntroduceSection';
import { ProfileSection } from './components/ProfileSection';
import { SectionGrid } from './components/SectionGrid';
import { ShareProfileButton } from './components/ShareProfileButton';
import { UserInfoSection } from './components/UserInfoSection';

const ProfilePage = () => {
  useTrackPageView({ eventName: '[View] 프로필 페이지' });
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);

  return (
    <Flex.Column margin="1rem" gap="1rem">
      <Flex.Row justify="flex-end">
        <ShareProfileButton />
      </Flex.Row>

      <ErrorBoundary FallbackComponent={PageErrorFallback}>
        <Suspense fallback={<ProfileSkeleton />}>
          <ProfileSection />
        </Suspense>

        <Suspense fallback={<IntroduceSkeleton />}>
          <IntroduceSection />
        </Suspense>

        <Suspense>
          <GithubGraphSection />
        </Suspense>
      </ErrorBoundary>

      <Flex.Row
        align="flex-start"
        gap="1rem"
        wrap={isMobile ? 'wrap' : 'nowrap'}
      >
        <Flex.Row width={isMobile ? '100%' : '60%'}>
          <SectionGrid />
        </Flex.Row>

        <Flex.Row width={isMobile ? '100%' : '40%'}>
          <QueryErrorResetBoundary>
            {({ reset }) => (
              <ErrorBoundary
                FallbackComponent={PageErrorFallback}
                onReset={reset}
              >
                <Suspense>
                  <UserInfoSection />
                </Suspense>
              </ErrorBoundary>
            )}
          </QueryErrorResetBoundary>
        </Flex.Row>
      </Flex.Row>
    </Flex.Column>
  );
};

export default ProfilePage;
