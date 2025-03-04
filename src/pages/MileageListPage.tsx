import { Flex, PageErrorFallback } from '@/components';
import {
  MileageCountSection,
  MileageFilterSection,
  MileageTableListSection,
} from '@/components/MileageList';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';

const MileageListPage = () => {
  return (
    <Flex.Column margin="1rem 2rem">
      <Flex.Row justify="space-between" align="center">
        <MileageFilterSection />
        <ErrorBoundary fallback={<div />}>
          <MileageCountSection />
        </ErrorBoundary>
      </Flex.Row>
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
