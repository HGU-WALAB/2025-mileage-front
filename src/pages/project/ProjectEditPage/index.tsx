import { DeferredComponent, PageErrorFallback } from '@/components';
import { useTrackPageView } from '@/service/amplitude/useTrackPageView';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { ProjectFormSkeleton } from '../components/ProjectFormSkeleton';
import { ProjectEditForm } from './components/ProjectEditForm';

const ProjectEditPage = () => {
  useTrackPageView({ eventName: '[View] 프로젝트 수정 페이지' });

  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary FallbackComponent={PageErrorFallback} onReset={reset}>
          <Suspense
            fallback={
              <DeferredComponent>
                <ProjectFormSkeleton />
              </DeferredComponent>
            }
          >
            <ProjectEditForm />
          </Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

export default ProjectEditPage;
