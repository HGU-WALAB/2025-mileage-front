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

import { DeleteProjectSection } from './components/DeleteProjectSection';
import { EditProjectButton } from './components/EditProjectButton';
import { ProjectDetailSection } from './components/ProjectDetailSection';
import { ProjectDetailSkeleton } from './components/ProjectDetailSkeleton';

const ProjectDetailPage = () => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);
  useTrackPageView({ eventName: '[View] 프로젝트 디테일 페이지' });

  return (
    <Flex.Column margin="1rem">
      <Flex.Row
        justify={isMobile ? 'flex-end' : 'space-between'}
        align="center"
        gap="1rem"
        padding={isMobile ? '0 .5rem .5rem' : '0 2rem .5rem'}
      >
        {!isMobile && <BackButton size="small" />}
        <Flex.Row gap="1rem">
          <EditProjectButton />
          <DeleteProjectSection />
        </Flex.Row>
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
