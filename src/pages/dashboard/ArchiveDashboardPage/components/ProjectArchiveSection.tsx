import {
  DeferredComponent,
  Flex,
  SectionErrorFallback,
  Title,
} from '@/components';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { ProjectArchiveGridSkeleton } from './ProjectArchiveGridSkeleton';

import { ProjectArchiveGrid } from './ProjectArchiveGrid';

export const ProjectArchiveSection = () => {
  return (
    <Flex.Column as="section">
      <Title label="프로젝트" />

      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            FallbackComponent={SectionErrorFallback}
            onReset={reset}
          >
            <Suspense
              fallback={
                <DeferredComponent>
                  <ProjectArchiveGridSkeleton />
                </DeferredComponent>
              }
            >
              <ProjectArchiveGrid />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </Flex.Column>
  );
};
