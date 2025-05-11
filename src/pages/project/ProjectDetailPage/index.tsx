import { DeferredComponent, Flex, PageErrorFallback } from '@/components';
import { useTrackPageView } from '@/service/amplitude/useTrackPageView';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { DeleteProjectButton } from './components/DeleteProjectButton';
import { EditProjectButton } from './components/EditProjectButton';
import { ProjectDetailSection } from './components/ProjectDetailSection';
import { ProjectDetailSkeleton } from './components/ProjectDetailSkeleton';

const ProjectDetailPage = () => {
  useTrackPageView({ eventName: '[View] 프로젝트 디테일 페이지' });

  return (
    <Flex.Column margin="1rem">
      <Flex.Row
        justify="flex-end"
        align="center"
        gap="1rem"
        padding="0 2rem .5rem"
      >
        <EditProjectButton />
        <DeleteProjectButton />
      </Flex.Row>

      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary FallbackComponent={PageErrorFallback} onReset={reset}>
            <Suspense
              fallback={
                <DeferredComponent>
                  <ProjectDetailSkeleton />
                </DeferredComponent>
              }
            >
              <ProjectDetailSection />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </Flex.Column>
  );
};

export default ProjectDetailPage;
