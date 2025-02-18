import { Flex, SectionErrorFallback, Title } from '@/components';
import { EtcMileageTable } from '@/components/AddMileage';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';

const EtcMileageSection = () => {
  return (
    <Flex.Column height="50%">
      <Title label="신청 가능 마일리지" />
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            FallbackComponent={SectionErrorFallback}
            onReset={reset}
          >
            <EtcMileageTable />
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </Flex.Column>
  );
};

export default EtcMileageSection;
