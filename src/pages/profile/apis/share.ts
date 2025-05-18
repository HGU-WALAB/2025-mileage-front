import { ENDPOINT } from '@/apis/endPoint';
import { http } from '@/apis/http';

import { ProfileResponse, TechStack } from '../types/profile';

export const getShareProfile = async () => {
  const response = await http.get<ProfileResponse>(`${ENDPOINT.SHARE}/myinfo`);
  return response;
};
