import { Flex, PageErrorFallback } from '@/components';
import { useTrackPageView } from '@/service/amplitude/useTrackPageView';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';

import { GithubGraphSection } from '@/pages/MyPage/components/GithubGraphSection';
import { InfoGuideSection } from './components/InfoGuideSection';
import { ProfileSection } from './components/ProfileSection';
import { RefreshUserInfoButton } from './components/RefreshUserInfoButton';
import { UserInfoSection } from './components/UserInfoSection';

const MyPage = () => {
  useTrackPageView({ eventName: '[View] 마이페이지' });

  return (
    <Flex.Column margin="1rem" gap="1rem">
      <ErrorBoundary FallbackComponent={PageErrorFallback}>
        <ProfileSection />
        <GithubGraphSection />
      </ErrorBoundary>

      <InfoGuideSection />

      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary FallbackComponent={PageErrorFallback} onReset={reset}>
            <UserInfoSection />

            <RefreshUserInfoButton />
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </Flex.Column>
  );
};

export default MyPage;
