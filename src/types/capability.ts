export interface CapabilityResponse {
  capabilityId: number;
  capabilityName: string;
  milestoneCount: number;
  totalMilestoneCount: number;
}

export interface CompareCapabilityRequest {
  term?: string;
  entryYear?: string;
  major1?: string;
  major2?: string;
}

export interface CompareCapabilityResponse {
  capabilityId: number;
  capabilityName: string;
  averageMilestoneCount: number;
}

export interface RadarCapability {
  capabilityId: number;
  capabilityName: string;
  mileagePercent: number;
  [key: string]: unknown;
}

export interface SemesterCapabilityResponse {
  semester: string;
  userMilestoneCount: number;
}
