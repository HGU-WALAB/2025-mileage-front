import { ENDPOINT } from '@/apis/endPoint';
import { http } from '@/apis/http';

import { ProjectResponse } from '../types/project';

export const getProjectList = async () => {
  const response = await http.get<ProjectResponse[]>(`${ENDPOINT.PROJECT}`);
  return response;
};
