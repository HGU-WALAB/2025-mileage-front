import { ENDPOINT } from '@/apis/endPoint';
import { http } from '@/apis/http';
import { toFormData } from '@/utils/toFormData';
import { GenericFormData } from 'axios';
import { BASE_URL } from '@/apis/config';

import {
  PatchProjectRequest,
  PostProjectRequest,
  ProjectResponse,
} from '../types/project';

export const getProject = async ({ projectId }: { projectId: string }) => {
  const response = await http.get<ProjectResponse>(
    `${ENDPOINT.PROJECT}/${projectId}`,
  );
  return response;
};

export const getProjectList = async () => {
  const response = await http.get<ProjectResponse[]>(`${ENDPOINT.PROJECT}`);
  return response;
};

export const getProjectThumbnail = async (thumbnail: string) => {
  if (!thumbnail) return null;
  const response = await http.get<Blob>(`${BASE_URL}${ENDPOINT.PROJECT}/image/${thumbnail}`, {
    responseType: 'blob',
  });
  return response;
};

export const postProject = async ({ formValues }: PostProjectRequest) => {
  const data = toFormData(formValues);

  const response = await http.post<GenericFormData>(
    `${ENDPOINT.PROJECT}`,
    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );

  return response;
};

export const patchProject = async ({
  projectId,
  formValues,
}: PatchProjectRequest) => {
  const data = toFormData(formValues);

  const response = await http.patch<GenericFormData>(
    `${ENDPOINT.PROJECT}/${projectId}`,
    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );

  return response;
};

export const deleteProject = async ({ projectId }: { projectId: string }) => {
  const response = await http.delete(`${ENDPOINT.PROJECT}/${projectId}`);
  return response;
};

export const getTopProject = async () => {
  const response = await http.get<ProjectResponse>(`${ENDPOINT.PROJECT}/top`);
  return response;
};

export const patchTopProject = async ({ projectId }: { projectId: number }) => {
  const response = await http.patch(`${ENDPOINT.PROJECT}/top`, { projectId });
  return response;
};
