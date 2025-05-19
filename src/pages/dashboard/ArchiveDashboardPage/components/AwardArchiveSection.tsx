import {
  DeferredComponent,
  Flex,
  SectionErrorFallback,
  Title,
} from '@/components';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { AwardArchiveGrid } from './AwardArchiveGrid';
import { AwardArchiveSkeleton } from './AwardArchiveSkeleton';

export const AwardArchiveSection = () => {
  return (
    <Flex.Column as="section">
      <Title label="수상 내역" />

      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            FallbackComponent={SectionErrorFallback}
            onReset={reset}
          >
            <Suspense
              fallback={
                <DeferredComponent>
                  <AwardArchiveSkeleton />
                </DeferredComponent>
              }
            >
              <AwardArchiveGrid />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </Flex.Column>
  );
};
