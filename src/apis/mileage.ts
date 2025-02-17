import { ENDPOINT } from '@/apis/endPoint';
import { http } from '@/apis/http';
import {
  MileageRequest,
  MileageResponse,
  NewMileageRequest,
  SubmittedMileageResponse,
} from '@/types/mileage';
import axios, { GenericFormData } from 'axios';

export const getMileageList = async ({
  studentId,
  keyword = '',
  category = 'all',
  semester = 'all',
  done = 'all',
}: MileageRequest) => {
  if (semester === '전체') semester = 'all';

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

export const getEtcMileageList = async () => {
  const response = await http.get<{ data: MileageResponse[] }>(
    `${ENDPOINT.ETC_MILEAGE}`,
  );

  return response.data;
};

export const postNewMileage = async ({
  studentId,
  subitemId,
  semester,
  description1,
  description2,
  file,
}: NewMileageRequest) => {
  const data = axios.toFormData({
    semester,
    description1,
    description2,
    file,
    subitemId,
  });

  const response = await http.post<GenericFormData>(
    `${ENDPOINT.ETC_MILEAGE}/${studentId}`,
    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );

  return response;
};
