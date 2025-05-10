import { ENDPOINT } from '@/apis/endPoint';
import { http } from '@/apis/http';

import { ALL_SEMESTER } from '../constants/system';
import { MileageRequest, MileageResponse } from '../types/mileage';

export const getMileageList = async ({
  keyword = '',
  category = 'all',
  semester = 'all',
  done = 'all',
}: MileageRequest) => {
  if (semester === ALL_SEMESTER) semester = 'all';

  const queryParams = new URLSearchParams({
    keyword,
    category,
    semester,
    done: done.toString(),
  });

  const response = await http.get<MileageResponse[]>(
    `${ENDPOINT.MILEAGE}/search`,
    { params: queryParams },
  );

  return response;
};
