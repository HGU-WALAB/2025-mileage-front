import { ENDPOINT } from '@/apis/endPoint';
import { http } from '@/apis/http';
import axios, { GenericFormData } from 'axios';

import { MileageResponse } from '@/pages/MileageListPage/types/mileage';

import {
  NewMileageRequest,
  PatchSubmittedMileageRequest,
  SubmittedMileageResponse,
} from '../types/addMileage';

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

export const deleteSubmittedMileage = async ({
  studentId,
  recordId,
}: {
  studentId: string;
  recordId: number;
}) => {
  const response = await http.delete(
    `${ENDPOINT.ETC_MILEAGE}/${studentId}/${recordId}`,
  );

  return response;
};

export const getSubmittedMileageFile = async ({
  uniqueFileName,
}: {
  uniqueFileName: string;
}) => {
  const response = await http.get<Blob>(
    `${ENDPOINT.ETC_MILEAGE}/file/${uniqueFileName}`,
    {
      responseType: 'blob',
    },
  );

  return response;
};

export const getSubmittedMileageList = async () => {
  const response = await http.get<SubmittedMileageResponse[]>(
    `${ENDPOINT.ETC_MILEAGE}/get`,
  );

  return response;
};
