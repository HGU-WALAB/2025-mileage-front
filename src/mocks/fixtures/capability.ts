import { CapabilityResponse } from '@/types/capability';

export const mockCapability: CapabilityResponse[] = [
  {
    capabilityId: 1,
    capabilityName: '전공 교과 역량',
    milestoneCount: 1,
    totalMilestoneCount: 12,
  },
  {
    capabilityId: 2,
    capabilityName: '전공 비교과 역량',
    milestoneCount: 3,
    totalMilestoneCount: 9,
  },
  {
    capabilityId: 3,
    capabilityName: '산학 연구 - 프로젝트',
    milestoneCount: 0,
    totalMilestoneCount: 8,
  },
  {
    capabilityId: 4,
    capabilityName: '가치 확산',
    milestoneCount: 2,
    totalMilestoneCount: 10,
  },
  {
    capabilityId: 5,
    capabilityName: '대외 활동',
    milestoneCount: 3,
    totalMilestoneCount: 20,
  },
];
