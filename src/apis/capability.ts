import { ENDPOINT } from '@/apis/endPoint';
import { http } from '@/apis/http';
import {
  CapabilityResponse,
  SemesterCapabilityResponse,
} from '@/types/capability';

export const getCapability = async () => {
  const response = await http.get<CapabilityResponse[]>(
    `${ENDPOINT.CAPABILITY}/milestone`,
  );

  return response;
};

export const getSemesterCapability = async () => {
  const response = await http.get<SemesterCapabilityResponse[]>(
    `${ENDPOINT.CAPABILITY}/semester`,
  );

  return response;
};
