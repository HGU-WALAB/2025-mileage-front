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

import { EtcMileageTable } from './EtcMileageTable';

export const EtcMileageSection = () => {
  return (
    <Flex.Column height="50%">
      <Title label="신청 가능 마일리지" />
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
              <EtcMileageTable />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </Flex.Column>
  );
};
