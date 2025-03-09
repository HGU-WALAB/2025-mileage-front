import { LoadingIcon } from '@/assets';
import { Flex, Heading, RadarChart } from '@/components';
import { useGetCapabilityQuery } from '@/hooks/queries';
import { boxShadow } from '@/styles/common';
import { RadarCapability } from '@/types/capability';
import { styled } from '@mui/material';

const RadarChartSection = () => {
  const { data: capability, isLoading } = useGetCapabilityQuery();
  const capabilityData = capability?.map(capability => {
    return {
      capabilityId: capability.capabilityId,
      capabilityName: capability.capabilityName,
      mileagePercent:
        (capability.milestoneCount / capability.totalMilestoneCount) * 100,
    };
  });

  return (
    <S.Container height="40%" width="100%" padding="1rem" gap="1rem">
      <Heading as="h3">나의 역량 비교 그래프</Heading>
      <Flex height="90%" width="100%" justify="center" align="center">
        {isLoading ? (
          <LoadingIcon width={100} height={100} />
        ) : (
          <RadarChart data={capabilityData as RadarCapability[]} />
        )}
      </Flex>
    </S.Container>
  );
};

export default RadarChartSection;

const S = {
  Container: styled(Flex.Column)`
    background-color: ${({ theme }) => theme.palette.variant.default};
    border-radius: 1rem;
    ${boxShadow}
  `,
};
