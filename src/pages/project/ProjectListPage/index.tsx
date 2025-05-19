import { DeferredComponent, Flex, PageErrorFallback } from '@/components';
import { useTrackPageView } from '@/service/amplitude/useTrackPageView';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { ProjectGridSkeleton } from '../components/ProjectGridSkeleton';
import { AddProjectButton } from './components/AddProjectButton';
import { ProjectGridSection } from './components/ProjectGridSection';

const ProjectListPage = () => {
  useTrackPageView({ eventName: '[View] 프로젝트 조회 페이지' });

  return (
    <Flex.Column margin="1rem" style={{ minHeight: '100%' }}>
      <Flex.Row justify="flex-end" align="center">
        <AddProjectButton />
      </Flex.Row>

      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary FallbackComponent={PageErrorFallback} onReset={reset}>
            <Suspense
              fallback={
                <DeferredComponent>
                  <ProjectGridSkeleton />
                </DeferredComponent>
              }
            >
              <ProjectGridSection />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </Flex.Column>
  );
};

export default ProjectListPage;
