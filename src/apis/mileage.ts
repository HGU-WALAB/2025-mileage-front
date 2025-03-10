import { ENDPOINT } from '@/apis/endPoint';
import { http } from '@/apis/http';
import {
  MileageRequest,
  MileageResponse,
  NewMileageRequest,
  PatchSubmittedMileageRequest,
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

  const response = await http.get<MileageResponse[]>(
    `${ENDPOINT.MILEAGE}/${studentId}/search`,
    { params: queryParams },
  );

  return response;
};

export const getEtcMileageList = async () => {
  const response = await http.get<MileageResponse[]>(`${ENDPOINT.ETC_MILEAGE}`);

  return response;
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

export const getSubmittedMileageList = async ({
  studentId,
}: {
  studentId: string;
}) => {
  const response = await http.get<SubmittedMileageResponse[]>(
    `${ENDPOINT.ETC_MILEAGE}/${studentId}`,
  );

  return response;
};

export const patchSubmittedMileage = async ({
  recordId,
  studentId,
  subitemId,
  description1,
  description2,
  file,
}: PatchSubmittedMileageRequest) => {
  const data = axios.toFormData({
    description1,
    description2,
    file,
    subitemId,
  });

  const response = await http.patch<GenericFormData>(
    `${ENDPOINT.ETC_MILEAGE}/${studentId}/${recordId}`,
    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );

  return response;
};
