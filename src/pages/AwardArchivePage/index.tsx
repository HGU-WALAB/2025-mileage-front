import {
  DeferredComponent,
  Flex,
  PageErrorFallback,
  TableListSkeleton,
} from '@/components';
import { useTrackPageView } from '@/service/amplitude/useTrackPageView';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { AwardFilterSection } from './components/AwardFilterSection';
import { AwardTableListSection } from './components/AwardTableListSection';

const AwardArchivePage = () => {
  useTrackPageView({ eventName: '[View] 상장 조회 페이지' });

  return (
    <Flex.Column margin="1rem">
      <Flex.Row justify="space-between" align="center">
        <AwardFilterSection />
      </Flex.Row>

      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary FallbackComponent={PageErrorFallback} onReset={reset}>
            <Suspense
              fallback={
                <DeferredComponent>
                  <TableListSkeleton />
                </DeferredComponent>
              }
            >
              <AwardTableListSection />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </Flex.Column>
  );
};

export default AwardArchivePage;
