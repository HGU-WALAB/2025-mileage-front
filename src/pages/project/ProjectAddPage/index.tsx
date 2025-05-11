import { DeferredComponent, PageErrorFallback } from '@/components';
import { useTrackPageView } from '@/service/amplitude/useTrackPageView';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { ProjectAddForm } from './components/ProjectAddForm';

const ProjectAddPage = () => {
  useTrackPageView({ eventName: '[View] 프로젝트 생성 페이지' });

  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary FallbackComponent={PageErrorFallback} onReset={reset}>
          <Suspense
            fallback={
              <DeferredComponent>
                {/* <ProjectCreateSkeleton /> */}
              </DeferredComponent>
            }
          >
            <ProjectAddForm />
          </Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

export default ProjectAddPage;
