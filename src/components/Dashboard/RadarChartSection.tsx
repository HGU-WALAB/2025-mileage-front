import { LoadingIcon } from '@/assets';
import { ErrorBox, Flex, Heading, RadarChart } from '@/components';
import { useGetCapabilityQuery } from '@/hooks/queries';
import { boxShadow } from '@/styles/common';
import { RadarCapability } from '@/types/capability';
import { styled } from '@mui/material';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const RadarChartSection = () => {
  return (
    <S.Container height="300px" width="100%" padding="1rem" gap="1rem">
      <Heading as="h3">나의 역량 비교 그래프</Heading>
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

export default RadarChartSection;

const ChartSection = () => {
  const { data: capability } = useGetCapabilityQuery();

  const capabilityData: RadarCapability[] = (capability ?? []).map(cap => ({
    capabilityId: cap.capabilityId,
    capabilityName: cap.capabilityName,
    mileagePercent: (cap.milestoneCount / cap.totalMilestoneCount) * 100,
  }));

  return <RadarChart data={capabilityData} />;
};

const S = {
  Container: styled(Flex.Column)`
    background-color: ${({ theme }) => theme.palette.variant.default};
    border-radius: 1rem;
    ${boxShadow}
  `,
};
