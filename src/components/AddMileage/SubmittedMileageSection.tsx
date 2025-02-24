import { Flex, SectionErrorFallback, Title } from '@/components';
import { SubmittedMileageTable } from '@/components/AddMileage';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';

const SubmittedMileageSection = () => {
  return (
    <Flex.Column height="50%">
      <Title label="신청 완료 마일리지" />
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            FallbackComponent={SectionErrorFallback}
            onReset={reset}
          >
            <SubmittedMileageTable />
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </Flex.Column>
  );
};

export default SubmittedMileageSection;
