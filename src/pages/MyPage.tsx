import { Flex, PageErrorFallback } from '@/components';
import {
  InfoGuideSection,
  RefreshUserInfoButton,
  UserInfoSection,
} from '@/components/My';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';

const MyPage = () => {
  return (
    <Flex.Column margin="1rem 2rem" gap="1rem">
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
