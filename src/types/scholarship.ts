export interface ScholarshipApplyRequest {
  studentId: string;
  isAgree: boolean;
}

export interface IsAppliedScholarshipResponse {
  // 신청함: 1, 신청안함: 0
  isApply: number;
}
