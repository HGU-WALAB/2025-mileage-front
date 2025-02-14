import { ENDPOINT } from '@/apis/endPoint';
import { http } from '@/apis/http';
import { ScholarshipApplyRequest } from '@/types/scholarship';

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
