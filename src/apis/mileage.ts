import { ENDPOINT } from '@/apis/endPoint';
import { http } from '@/apis/http';
import { MileageRequest, MileageResponse } from '@/types/mileage';

export const getMileageList = async ({
  studentId,
  keyword = '',
  category = 'all',
  semester = 'all',
  done = 'all',
}: MileageRequest) => {
  const queryParams = new URLSearchParams({
    keyword,
    category,
    semester,
    done: done.toString(),
  });

  const response = await http.get<{ data: MileageResponse[] }>(
    `${ENDPOINT.MILEAGE}/${studentId}/search`,
    { params: queryParams },
  );

  return response.data;
};
