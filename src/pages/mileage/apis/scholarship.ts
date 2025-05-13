import { ENDPOINT } from '@/apis/endPoint';
import { http } from '@/apis/http';

import {
  IsAppliedScholarshipResponse,
  ScholarshipApplyRequest,
  ScholarshipDurationResponse,
} from '../types/scholarship';

export const postScholarshipApply = async ({
  studentId,
  isAgree,
}: ScholarshipApplyRequest) => {
  const response = await http.post<Omit<ScholarshipApplyRequest, 'studentId'>>(
    `${ENDPOINT.SCHOLARSHIP_APPLY}/${studentId}`,
    {
      isAgree,
    },
  );

  return response;
};

export const getIsAppliedScholarship = async () => {
  const response = await http.get<IsAppliedScholarshipResponse>(
    `${ENDPOINT.SCHOLARSHIP_APPLY}/status`,
  );

  return response;
};

export const getScholarshipDuration = async () => {
  const response = await http.get<ScholarshipDurationResponse>(
    `${ENDPOINT.SCHOLARSHIP_APPLY}`,
  );

  return response;
};
