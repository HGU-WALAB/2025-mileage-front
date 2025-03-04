export interface Capability {
  capabilityId: number;
  capabilityName: string;
  milestoneCount: number;
  [key: string]: unknown;
}

export interface SemesterCapability {
  semester: string;
  point: number;
}
