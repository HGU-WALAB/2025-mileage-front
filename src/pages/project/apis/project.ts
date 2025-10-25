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
import { ProjectArchiveResponse } from '../types/projectArchive';
import { ProjectDetailResponse, PatchProjectDetailRequest, PatchProjectStatusRequest, PatchProjectStatusResponse } from '../types/projectDetail';

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

export const putProject = async ({
  projectId,
  formValues,
}: PatchProjectRequest) => {
  const data = toFormData(formValues);

  const response = await http.put<GenericFormData>(
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

// 프로젝트 아카이브 조회 API
export const getProjectArchiveList = async () => {
  const response = await http.get<ProjectArchiveResponse[]>(`${ENDPOINT.PROJECT}?archive=true`);
  return response;
};

// 프로젝트 상세보기 조회 API
export const getProjectDetail = async ({ projectId }: { projectId: string }) => {
  const response = await http.get<ProjectDetailResponse>(
    `${ENDPOINT.PROJECT}/${projectId}`,
  );
  return response;
};

// 프로젝트 상세보기 수정 API
export const patchProjectDetail = async ({
  projectId,
  formValues,
}: PatchProjectDetailRequest) => {
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

// 프로젝트 상태 수정 API
export const patchProjectStatus = async ({
  projectId,
  status,
}: PatchProjectStatusRequest) => {
  const response = await http.patch<PatchProjectStatusResponse>(
    `${ENDPOINT.PROJECT}/${projectId}/status`,
    { status } as any,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return response;
};
