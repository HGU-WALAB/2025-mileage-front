import { ENDPOINT } from '@/apis/endPoint';
import { http } from '@/apis/http';

import { PatchSubmittedProfileRequest, ProfileResponse, TechStack } from '../types/profile';
import axios, { GenericFormData } from 'axios';
import { BASE_URL } from '@/apis/config';

export const getProfile = async () => {
  const response = await http.get<ProfileResponse>(`${ENDPOINT.PROFILE}`);
  return response;
};

export const getTechStack = async () => {
  const response = await http.get<TechStack>(`${ENDPOINT.PROFILE}/techStack`);
  return response;
};

export const getProfileImage = async (profileImageUrl: string) => {
  if (!profileImageUrl) return null;
  const response = await http.get<Blob>(`${BASE_URL}${ENDPOINT.PROFILE}/image/${profileImageUrl}`, {
    responseType: 'blob',
  });
  return response;
};

export const patchProfile = async ({ 
  job,
  self_description,
  github_link,
  blog_link,
  linkedin_link,
  instagram_link,
  profile_image_url,
} : PatchSubmittedProfileRequest) => {
  const data = axios.toFormData({
    job,
    self_description,
    github_link,
    blog_link,
    linkedin_link,
    instagram_link,
    profile_image_url,
  });

  const response = await http.patch<GenericFormData>(
    `${ENDPOINT.PROFILE}`,
    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );

  return response;
};

export const patchTechStack = async (techStack : TechStack) => {
  const response = await http.patch(`${ENDPOINT.PROFILE}/techStack`, techStack,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return response;
};
