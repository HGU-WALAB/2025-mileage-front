export interface CapabilityResponse {
  capabilityId: number;
  capabilityName: string;
  milestoneCount: number;
  totalMilestoneCount: number;
}

export interface RadarCapability {
  capabilityId: number;
  capabilityName: string;
  mileagePercent: number;
  [key: string]: unknown;
}

export interface SemesterCapability {
  semester: string;
  point: number;
}
