import { Flex, PageErrorFallback } from '@/components';
import { useTrackPageView } from '@/service/amplitude/useTrackPageView';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';

import { GithubGraphSection } from './components/GithubGraphSection';
import { ProfileSection } from './components/ProfileSection';
import { UserInfoSection } from './components/UserInfoSection';

const MyPage = () => {
  useTrackPageView({ eventName: '[View] 마이페이지' });

  return (
    <Flex.Column margin="1rem" gap="1rem">
      <ErrorBoundary FallbackComponent={PageErrorFallback}>
        <ProfileSection />
        <GithubGraphSection />
      </ErrorBoundary>

      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary FallbackComponent={PageErrorFallback} onReset={reset}>
            <UserInfoSection />
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </Flex.Column>
  );
};

export default MyPage;
