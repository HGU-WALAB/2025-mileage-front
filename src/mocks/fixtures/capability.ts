import { Capability } from '@/types/capability';

export const mockCapability: { data: Capability[] } = {
  data: [
    {
      capabilityId: 1,
      capabilityName: '전공 교과 역량',
      capabilityPoint: 733,
    },
    {
      capabilityId: 2,
      capabilityName: '전공 비교과 역량',
      capabilityPoint: 135,
    },
    {
      capabilityId: 3,
      capabilityName: '산학 연구 - 프로젝트',
      capabilityPoint: 312,
    },
    {
      capabilityId: 4,
      capabilityName: '가치 확산',
      capabilityPoint: 293,
    },
    {
      capabilityId: 5,
      capabilityName: '대외 활동',
      capabilityPoint: 993,
    },
  ],
};
