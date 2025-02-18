import { Flex, PageErrorFallback } from '@/components';
import {
  MileageFilterSection,
  MileageTableListSection,
} from '@/components/MileageList';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';

const MileageListPage = () => {
  return (
    <Flex.Column margin="1rem 2rem">
      <MileageFilterSection />
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary FallbackComponent={PageErrorFallback} onReset={reset}>
            <MileageTableListSection />
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </Flex.Column>
  );
};

export default MileageListPage;
