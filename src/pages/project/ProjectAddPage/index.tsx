import {
  BackButton,
  DeferredComponent,
  Flex,
  PageErrorFallback,
} from '@/components';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { useTrackPageView } from '@/service/amplitude/useTrackPageView';
import { useMediaQuery } from '@mui/material';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { ProjectFormSkeleton } from '../components/ProjectFormSkeleton';
import { ProjectAddForm } from './components/ProjectAddForm';

const ProjectAddPage = () => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);
  useTrackPageView({ eventName: '[View] 프로젝트 생성 페이지' });

  return (
    <Flex.Column width="100%">
      {!isMobile && (
        <Flex.Row padding="1rem 6rem 0 ">
          <BackButton />
        </Flex.Row>
      )}

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
              <ProjectAddForm />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </Flex.Column>
  );
};

export default ProjectAddPage;
