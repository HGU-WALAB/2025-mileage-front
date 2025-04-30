import { RadarChart } from '@/components';
import { useGetCapabilityQuery, useGetUserInfoQuery } from '@/hooks/queries';
import { useGetCompareCapabilityQuery } from '@/hooks/queries/useGetCompareCapabilityQuery';
import { RadarCapability } from '@/types/capability';

export const RadarChartSection = ({
  compareOption,
}: {
  compareOption: string[];
}) => {
  const { data: user } = useGetUserInfoQuery();

  const { capability } = useGetCapabilityQuery();
  const { compareCapability } = useGetCompareCapabilityQuery({
    term: compareOption.includes('term') ? `${user?.term}` : undefined,
    entryYear: compareOption.includes('entryYear')
      ? user?.studentId.slice(1, 3)
      : undefined,
    major1: compareOption.includes('major1') ? user?.major1 : undefined,
    major2: compareOption.includes('major2') ? user?.major2 : undefined,
  });

  const capabilityData: RadarCapability[] = (capability ?? []).map(cap => {
    const matchedCompare = compareCapability?.find(
      other => other.capabilityId === cap.capabilityId,
    );

    const myMileagePercent =
      (cap.milestoneCount / cap.totalMilestoneCount) * 100;
    const otherMileagePercent = matchedCompare
      ? (matchedCompare.averageMilestoneCount / cap.totalMilestoneCount) * 100
      : 0;

    return {
      capabilityId: cap.capabilityId,
      capabilityName: cap.capabilityName,
      '나의 마일리지': myMileagePercent,
      '다른사람 평균': otherMileagePercent,
    };
  });

  return <RadarChart data={capabilityData} />;
};
