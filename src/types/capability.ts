export interface Capability {
  capabilityId: number;
  capabilityName: string;
  capabilityPoint: number;
  [key: string]: unknown;
}

export interface SemesterCapability {
  semester: string;
  point: number;
}
