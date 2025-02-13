import { ENDPOINT } from '@/apis/endPoint';
import { http } from '@/apis/http';
import {
  MileageRequest,
  MileageResponse,
  NewMileageResponse,
} from '@/types/mileage';
import axios, { GenericFormData } from 'axios';

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

export const getEtcMileageList = async () => {
  const response = await http.get<{ data: MileageResponse[] }>(
    `${ENDPOINT.NEW_MILEAGE}`,
  );

  return response.data;
};

export const postNewMileage = async ({
  semester,
  description1,
  description2,
  file,
}: NewMileageResponse) => {
  const data = axios.toFormData({
    semester,
    description1,
    description2,
    file,
  });

  const response = await http.post<GenericFormData>(
    `${ENDPOINT.NEW_MILEAGE}`,
    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );

  return response;
};
