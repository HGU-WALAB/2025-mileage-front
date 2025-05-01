import { LoadingIcon } from '@/assets';
import { ErrorBox, Flex, Heading, LineChart } from '@/components';
import { useGetSemesterCapabilityQuery } from '@/hooks/queries';
import { boxShadow } from '@/styles/common';
import { SemesterCapabilityResponse } from '@/types/capability';
import { styled } from '@mui/material';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const LineChartSection = () => {
  return (
    <S.Container height="300px" width="100%" padding="1rem" gap="1rem">
      <Heading as="h3">나의 누적 마일리지 활동 개수</Heading>
      <Flex height="90%" width="100%" justify="center" align="center">
        <ErrorBoundary FallbackComponent={ErrorBox}>
          <Suspense fallback={<LoadingIcon width={100} height={100} />}>
            <ChartSection />
          </Suspense>
        </ErrorBoundary>
      </Flex>
    </S.Container>
  );
};

export default LineChartSection;

const ChartSection = () => {
  const { data: semesterCapability } = useGetSemesterCapabilityQuery();

  return (
    <LineChart data={semesterCapability as SemesterCapabilityResponse[]} />
  );
};

const S = {
  Container: styled(Flex.Column)`
    background-color: ${({ theme }) => theme.palette.variant.default};
    border-radius: 1rem;
    ${boxShadow}
  `,
};
