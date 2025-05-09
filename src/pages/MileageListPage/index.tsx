import { Flex, PageErrorFallback } from '@/components';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { useTrackPageView } from '@/service/amplitude/useTrackPageView';
import { useMediaQuery } from '@mui/material';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';

import { MileageCountSection } from './components/MileageCountSection';
import { MileageFilterSection } from './components/MileageFilterSection';
import { MileageTableListSection } from './components/MileageTableListSection';
import { MobileMileageCountSection } from './components/MobileMileageCountSection';

const MileageListPage = () => {
  useTrackPageView({ eventName: '[View] 마일리지 조회 페이지' });
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);

  return (
    <Flex.Column margin="1rem">
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
