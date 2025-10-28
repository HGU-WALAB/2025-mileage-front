import {
  DeferredComponent,
  Flex,
  SectionErrorFallback,
} from '@/components';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { useMediaQuery } from '@mui/material';
import { Suspense, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { ProjectArchiveGridSkeleton } from './ProjectArchiveGridSkeleton';
import { ProjectArchiveGrid } from './ProjectArchiveGrid';
import { ProjectArchiveAddModal } from '@project/ProjectArchiveAdd';
import { MobileProjectArchiveHeader } from './MobileProjectArchiveHeader';
import { DesktopProjectArchiveHeader } from './DesktopProjectArchiveHeader';

export const ProjectArchiveSection = () => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // 정렬 상태 관리
  const [statusFilter, setStatusFilter] = useState('전체');
  const [languageFilter, setLanguageFilter] = useState('전체');
  const [sortOrder, setSortOrder] = useState('최신순');

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Flex.Column as="section">
      {isMobile ? (
        <MobileProjectArchiveHeader
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          languageFilter={languageFilter}
          setLanguageFilter={setLanguageFilter}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          onOpenModal={handleOpenModal}
        />
      ) : (
        <DesktopProjectArchiveHeader
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          languageFilter={languageFilter}
          setLanguageFilter={setLanguageFilter}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          onOpenModal={handleOpenModal}
        />
      )}

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
