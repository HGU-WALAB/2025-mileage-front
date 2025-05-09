import { RadarChart } from '@/components';

import { useGetUserInfoQuery } from '@/pages/LoginPage/hooks/useGetUserInfoQuery';

import { useGetCapabilityQuery } from '../hooks/useGetCapabilityQuery';
import { useGetCompareCapabilityQuery } from '../hooks/useGetCompareCapabilityQuery';
import { RadarCapability } from '../types/capability';

export const RadarChartSection = ({
  compareOption,
}: {
  compareOption: string[];
}) => {
  const { userInfo } = useGetUserInfoQuery();

  const { capability } = useGetCapabilityQuery();
  const { compareCapability } = useGetCompareCapabilityQuery({
    term: compareOption.includes('term') ? `${userInfo?.term}` : undefined,
    entryYear: compareOption.includes('entryYear')
      ? userInfo?.studentId.slice(1, 3)
      : undefined,
    major1: compareOption.includes('major1') ? userInfo?.major1 : undefined,
    major2: compareOption.includes('major2') ? userInfo?.major2 : undefined,
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
