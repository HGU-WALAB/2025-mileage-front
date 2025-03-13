import { Flex, PageErrorFallback } from '@/components';
import {
  MileageCountSection,
  MileageFilterSection,
  MileageTableListSection,
  MobileMileageCountSection,
} from '@/components/MileageList';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { useMediaQuery } from '@mui/material';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';

const MileageListPage = () => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);

  return (
    <Flex.Column margin="1rem 2rem">
      {isMobile && (
        <ErrorBoundary fallback={<div />}>
          <MobileMileageCountSection />
        </ErrorBoundary>
      )}
      <Flex.Row justify="space-between" align="center">
        <MileageFilterSection />
        <ErrorBoundary fallback={<div />}>
          <MileageCountSection />
        </ErrorBoundary>
      </Flex.Row>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary FallbackComponent={PageErrorFallback} onReset={reset}>
            <MileageTableListSection />
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </Flex.Column>
  );
};

export default MileageListPage;
