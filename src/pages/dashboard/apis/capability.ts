import { ENDPOINT } from '@/apis/endPoint';
import { http } from '@/apis/http';

import {
  ActivityRecommendResponse,
  CapabilityDetailResponse,
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
  major = '',
}: CompareCapabilityRequest) => {
  const queryParams = new URLSearchParams({
    term,
    entryYear,
    major,
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

export const getCapabilityDetail = async () => {
  const response = await http.get<CapabilityDetailResponse[]>(
    `${ENDPOINT.MILEAGE}/detail`,
  );
  return response;
};

export const getActivityRecommend = async () => {
  const response = await http.get<ActivityRecommendResponse>(
    `${ENDPOINT.CAPABILITY}/suggest`,
  );
  return response;
};
