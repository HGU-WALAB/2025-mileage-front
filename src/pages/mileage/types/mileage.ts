export interface MileageResponse {
  // 카테고리
  categoryId: number;
  categoryName: string;

  // 항목명
  subitemId: number;
  subitemName: string;

  semester: string;
  done: boolean;
  recordId: number | null;
  description1: string | null;
}

export interface MileageRequest {
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
  recordId: number;

  subitemId: number;
  subitemName: string;

  semester: string;

  description1: string;
  description2: string | null;

  fileId: number | null;
  file: string | null;
  uniqueFileName: string | null;

  modDate: string;
}

export interface NewMileageRequest {
  studentId: string;
  subitemId: number;
  semester: string;
  description1: string;
  description2: string | null;
  file: File | null;
}

export interface PatchSubmittedMileageRequest {
  recordId: number;
  studentId: string;
  subitemId: number;
  description1: string;
  description2: string | null;
  file: File | null;
}
