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

export const getEtcMileageList = async ({ semester = 'all' }) => {
  const queryParams = new URLSearchParams({
    semester,
  });

  const response = await http.get<{ data: MileageResponse[] }>(
    `${ENDPOINT.NEW_MILEAGE}`,
    { params: queryParams },
  );

  return response.data;
};
