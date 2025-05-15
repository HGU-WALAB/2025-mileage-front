import { LoadingIcon } from '@/assets';
import { ErrorBox, Flex, Heading, LineChart } from '@/components';
import { boxShadow } from '@/styles/common';
import { styled } from '@mui/material';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { useGetSemesterCapabilityQuery } from '../../hooks/useGetSemesterCapabilityQuery';
import { SemesterCapabilityResponse } from '../../types/capability';

export const MileageHistoryChartSection = () => {
  return (
    <S.Container height="300px" width="100%" padding="1rem" gap="1rem">
      <Heading as="h3">나의 누적 마일리지(건)</Heading>
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
