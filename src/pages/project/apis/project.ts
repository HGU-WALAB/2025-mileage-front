import { ENDPOINT } from '@/apis/endPoint';
import { http } from '@/apis/http';
import { toFormData } from '@/utils/toFormData';
import { GenericFormData } from 'axios';

import { PostProjectRequest, ProjectResponse } from '../types/project';

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

export const postProject = async ({
  studentId,
  formValues,
}: PostProjectRequest) => {
  const data = toFormData(formValues);

  const response = await http.post<GenericFormData>(
    `${ENDPOINT.PROJECT}/${studentId}`,
    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );

  return response;
};

export const getTopProject = async () => {
  const response = await http.get<ProjectResponse>(`${ENDPOINT.PROJECT}/top`);
  return response;
};

