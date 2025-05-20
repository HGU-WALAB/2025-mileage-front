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
import { ProjectEditForm } from './components/ProjectEditForm';

const ProjectEditPage = () => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);
  useTrackPageView({ eventName: '[View] 프로젝트 수정 페이지' });

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
              <ProjectEditForm />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </Flex.Column>
  );
};

export default ProjectEditPage;
