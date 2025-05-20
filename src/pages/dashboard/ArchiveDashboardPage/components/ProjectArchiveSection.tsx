import {
  DeferredComponent,
  Flex,
  SectionErrorFallback,
  Title,
} from '@/components';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { ProjectGridSkeleton } from '@project/components/ProjectGridSkeleton';

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
                  <ProjectGridSkeleton />
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
