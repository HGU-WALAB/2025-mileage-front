import {
  DeferredComponent,
  Flex,
  SectionErrorFallback,
  Title,
} from '@/components';
import { PlusIcon } from '@/assets';
import { Button } from '@/components';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { useMediaQuery } from '@mui/material';
import { Suspense, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { ProjectArchiveGridSkeleton } from './ProjectArchiveGridSkeleton';
import { ProjectArchiveGrid } from './ProjectArchiveGrid';
import { ProjectArchiveAddModal } from '@project/ProjectArchiveAdd';

export const ProjectArchiveSection = () => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Flex.Column as="section">
      <Flex.Row justify="space-between" align="center" margin="0 0 1rem 0">
        <Title label="프로젝트" />
        <Button
          label={isMobile ? "추가" : "새 프로젝트 추가하기"}
          size="medium"
          icon={PlusIcon}
          onClick={handleOpenModal}
        />
      </Flex.Row>

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

      <ProjectArchiveAddModal 
        open={isModalOpen} 
        toggleModal={handleCloseModal} 
      />
    </Flex.Column>
  );
};
