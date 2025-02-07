import { ENDPOINT } from '@/apis/endPoint';
import { http } from '@/apis/http';
import { MileageRequest, MileageResponse } from '@/types/mileage';

export const getMileageList = async ({
  studentId,
  searchExample = 'all',
  categoryName = 'all',
  semester = 'all',
  done = 'all',
}: MileageRequest) => {
  const queryParams = new URLSearchParams({
    searchExample,
    categoryName,
    semester,
    done: done.toString(),
  });

  const response = await http.get<{ data: MileageResponse[] }>(
    `${ENDPOINT.MILEAGE}/${studentId}/search?${queryParams.toString()}`,
  );

  return response.data;
};
