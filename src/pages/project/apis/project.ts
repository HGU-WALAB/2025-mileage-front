import { ENDPOINT } from '@/apis/endPoint';
import { http } from '@/apis/http';

import { ProjectResponse } from '../types/project';

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
