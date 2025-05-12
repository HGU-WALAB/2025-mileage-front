import { Flex, PageErrorFallback } from '@/components';
import { useTrackPageView } from '@/service/amplitude/useTrackPageView';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';

import { AwardCountSection } from './components/AwardCountSection';
import { GithubGraphSection } from './components/GithubGraphSection';
import { MileageCountSection } from './components/MileageCountSection';
import { ProfileSection } from './components/ProfileSection';
import { UserInfoSection } from './components/UserInfoSection';

const ProfilePage = () => {
  useTrackPageView({ eventName: '[View] 마이페이지' });

  return (
    <Flex.Column margin="1rem" gap="1rem">
      <ErrorBoundary FallbackComponent={PageErrorFallback}>
        <ProfileSection />
        <GithubGraphSection />
      </ErrorBoundary>

      <Flex.Row align="flex-start" gap="1rem">
        <MileageCountSection />

        <AwardCountSection />
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
    </Flex.Column>
  );
};

export default ProfilePage;
