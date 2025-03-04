export interface MileageResponse {
  // 역량
  capabilityId: number;
  capabilityName: string;
  milestoneCount: number;

  // 카테고리
  categoryId: number;
  categoryName: string;

  // 항목명
  subitemId: number;
  subitemName: string;

  semester: string;
  done: boolean;
  description: string;

  // 등록한 카테고리에 대한 관리자 처리
  isEtcActioned: boolean;
}

export interface MileageRequest {
  studentId: string;
  keyword?: string;
  category?: string;
  semester?: string;
  done?: string;
}

export interface EtcMileageResponse {
  // 카테고리
  categoryId: number;
  categoryName: string;

  // 항목명
  subitemId: number;
  subitemName: string;

  semester: string;
}

export interface SubmittedMileageResponse {
  subitemId: number;
  subitemName: string;
  semester: string;
  description1: string;
  description2: string | null;
  file: File | null;
  modDate: string;
  recordId: number;
}

export interface NewMileageRequest {
  studentId: string;
  subitemId: number;
  semester: string;
  description1: string;
  description2: string | null;
  file: File | null;
}
