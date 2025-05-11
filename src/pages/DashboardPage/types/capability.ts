export interface CapabilityResponse {
  capabilityId: number;
  capabilityName: string;
  milestoneCount: number;
  totalMilestoneCount: number;
}

export interface CompareCapabilityRequest {
  term?: string;
  entryYear?: string;
  studentType?: string;
}

export interface CompareCapabilityResponse {
  capabilityId: number;
  capabilityName: string;
  averageMilestoneCount: number;
}

export interface RadarCapability {
  capabilityId: number;
  capabilityName: string;
  '나의 마일리지': number;
  '다른사람 평균': number;
  [key: string]: unknown;
}

export interface SemesterCapabilityResponse {
  semester: string;
  userMilestoneCount: number;
}
