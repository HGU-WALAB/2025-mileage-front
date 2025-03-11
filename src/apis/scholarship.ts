import { ENDPOINT } from '@/apis/endPoint';
import { http } from '@/apis/http';
import {
  IsAppliedScholarshipResponse,
  ScholarshipApplyRequest,
} from '@/types/scholarship';

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

export const getIsAppliedScholarship = async ({
  studentId,
}: {
  studentId: string;
}) => {
  const response = await http.get<IsAppliedScholarshipResponse>(
    `${ENDPOINT.SCHOLARSHIP_APPLY}/${studentId}`,
  );

  return response;
};
