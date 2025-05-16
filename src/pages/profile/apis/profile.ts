import { ENDPOINT } from '@/apis/endPoint';
import { http } from '@/apis/http';

import { ProfileResponse, TechStack } from '../types/profile';

export const getProfile = async () => {
  const response = await http.get<ProfileResponse>(`${ENDPOINT.PROFILE}`);

  return response;
};

export const getTechStack = async () => {
  const response = await http.get<TechStack>(`${ENDPOINT.PROFILE}/techStack`);

  return response;
};
