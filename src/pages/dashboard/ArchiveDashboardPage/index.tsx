import { Flex, SectionErrorFallback } from '@/components';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { AwardArchiveSection } from './components/AwardArchiveSection';
import { ProjectArchiveSection } from './components/ProjectArchiveSection';

const ArchiveDashboardPage = () => {
  return (
    <Flex.Column margin="1rem" gap="1rem">
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            FallbackComponent={SectionErrorFallback}
            onReset={reset}
          >
            <Suspense>
              <AwardArchiveSection />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>

      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            FallbackComponent={SectionErrorFallback}
            onReset={reset}
          >
            <Suspense>
              <ProjectArchiveSection />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </Flex.Column>
  );
};

export default ArchiveDashboardPage;
