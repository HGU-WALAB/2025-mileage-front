import { ENDPOINT } from '@/apis/endPoint';
import { http } from '@/apis/http';

import { ProjectResponse } from '@/pages/project/types/project';
import { ProfileResponse, TechStack } from '../types/profile';

export const getShareProfile = async (id: string) => {
  const response = await http.get<ProfileResponse>(`${ENDPOINT.SHARE}/${id}`);
  return response;
};

export const getShareTechStack = async (id: string) => {
  const response = await http.get<TechStack>(
    `${ENDPOINT.SHARE}/${id}/techStack`,
  );
  return response;
};

export const getShareTopProject = async (id: string) => {
  const response = await http.get<ProjectResponse>(
    `${ENDPOINT.SHARE}/${id}/projectTop`,
  );
  return response;
};

export const getShareAwardCount = async (id: string) => {
  const response = await http.get<{ awardCount: number }>(
    `${ENDPOINT.SHARE}/${id}/award`,
  );
  return response;
};

export const getShareMileageCount = async (id: string) => {
  const response = await http.get<{ mileageCount: number }>(
    `${ENDPOINT.SHARE}/${id}/mileage`,
  );
  return response;
};
