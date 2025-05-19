import {
  BoxSkeleton,
  DeferredComponent,
  Flex,
  SectionErrorFallback,
  Title,
} from '@/components';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { SubmittedMileageTable } from './SubmittedMileageTable';

export const SubmittedMileageSection = () => {
  return (
    <Flex.Column height="50%">
      <Title label="신청 완료 마일리지" />
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            FallbackComponent={SectionErrorFallback}
            onReset={reset}
          >
            <Suspense
              fallback={
                <DeferredComponent>
                  <BoxSkeleton />
                </DeferredComponent>
              }
            >
              <SubmittedMileageTable />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </Flex.Column>
  );
};
