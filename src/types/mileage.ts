export interface MileageResponse {
  subitemId: number;
  subitemName: string;
  categoryId: number;
  categoryName: string;
  capabilityId: number;
  capabilityName: string;
  capabilityPoint: number;
  semester: string;
  done: boolean;
  description: string;
  isEtcActioned: boolean;
}

export interface MileageRequest {
  studentId: number;
  searchExample?: string;
  categoryName?: string;
  semester?: string;
  done?: string;
}
