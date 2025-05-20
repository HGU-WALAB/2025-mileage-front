import {
  BackButton,
  DeferredComponent,
  Flex,
  PageErrorFallback,
} from '@/components';
import { useTrackPageView } from '@/service/amplitude/useTrackPageView';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { ROUTE_PATH } from '@/constants/routePath';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { useMediaQuery } from '@mui/material';
import { ProjectGridSkeleton } from '../components/ProjectGridSkeleton';
import { AddProjectButton } from './components/AddProjectButton';
import { ProjectGridSection } from './components/ProjectGridSection';

const ProjectListPage = () => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);
  useTrackPageView({ eventName: '[View] 프로젝트 조회 페이지' });

  return (
    <Flex.Column margin="1rem" style={{ minHeight: '100%' }}>
      <Flex.Row justify="space-between" align="center">
        {!isMobile && <BackButton to={ROUTE_PATH.archive} />}
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
