import { Flex, PageErrorFallback } from '@/components';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { useTrackPageView } from '@/service/amplitude/useTrackPageView';
import { useMediaQuery } from '@mui/material';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';

import { GithubGraphSection } from './components/GithubGraphSection';
import { ProfileSection } from './components/ProfileSection';
import { SectionGrid } from './components/SectionGrid';
import { UserInfoSection } from './components/UserInfoSection';
import { SkillSection } from './components/SkillSection';

const ProfilePage = () => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);
  useTrackPageView({ eventName: '[View] 마이페이지' });

  return (
    <Flex.Column margin="1rem" gap="1rem">
      <ErrorBoundary FallbackComponent={PageErrorFallback}>
        <ProfileSection />
        <GithubGraphSection />
      </ErrorBoundary>

      <Flex.Row
        align="flex-start"
        gap="1rem"
        wrap={isMobile ? 'wrap' : 'nowrap'}
      >
        <Flex.Row width="60%">
          <SectionGrid />
        </Flex.Row>

        <Flex.Row width="40%">
          <QueryErrorResetBoundary>
            {({ reset }) => (
              <ErrorBoundary
                FallbackComponent={PageErrorFallback}
                onReset={reset}
              >
                <UserInfoSection />
              </ErrorBoundary>
            )}
          </QueryErrorResetBoundary>
        </Flex.Row>
      </Flex.Row>
    </Flex.Column>
  );
};

export default ProfilePage;
