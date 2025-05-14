import { ENDPOINT } from '@/apis/endPoint';
import { http } from '@/apis/http';

import {
  CapabilityResponse,
  CompareCapabilityRequest,
  CompareCapabilityResponse,
  SemesterCapabilityResponse,
} from '../types/capability';

export const getCapability = async () => {
  const response = await http.get<CapabilityResponse[]>(
    `${ENDPOINT.CAPABILITY}/milestone`,
  );

  return response;
};

export const getCompareCapability = async ({
  term = '',
  entryYear = '',
  studentType = '',
}: CompareCapabilityRequest) => {
  const queryParams = new URLSearchParams({
    term,
    entryYear,
    studentType,
  });

  const response = await http.get<CompareCapabilityResponse[]>(
    `${ENDPOINT.CAPABILITY}/milestone/compare`,
    { params: queryParams },
  );

  return response;
};

export const getSemesterCapability = async () => {
  const response = await http.get<SemesterCapabilityResponse[]>(
    `${ENDPOINT.CAPABILITY}/semester`,
  );

  return response;
};
