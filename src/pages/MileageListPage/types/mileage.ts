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
  description1: string;

  // 등록한 카테고리에 대한 관리자 처리
  isEtcActioned: boolean;
}

export interface MileageRequest {
  keyword?: string;
  category?: string;
  semester?: string;
  done?: string;
}
