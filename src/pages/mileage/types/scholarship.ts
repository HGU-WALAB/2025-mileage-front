export interface ScholarshipApplyRequest {
  studentId: string;
  isAgree: boolean;
}

export interface IsAppliedScholarshipResponse {
  // 신청함: 1, 신청안함: 0
  isApply: number;
}

export interface ScholarshipDurationResponse {
  regStart: string;
  regEnd: string;
}

export interface Consent {
  version: string;
  updatedAt: string;
  title: string;
  description: string;
}
