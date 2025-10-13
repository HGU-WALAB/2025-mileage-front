import { ENDPOINT } from '@/apis/endPoint';
import { http } from '@/apis/http';
import { GenericFormData } from 'axios';

import {
  PostProjectArchiveAddRequest,
  ProjectArchiveAddFormValues,
} from '../types/projectArchiveAdd';

const convertToFormData = (formValues: ProjectArchiveAddFormValues): FormData => {
  const formData = new FormData();

  // 기본 필드들
  formData.append('name', formValues.name);
  formData.append('description', formValues.description);
  formData.append('techStack', JSON.stringify(formValues.techStack));
  formData.append('start_date', formValues.start_date);

  // 선택적 필드들
  if (formValues.role) {
    formData.append('role', formValues.role);
  }
  if (formValues.github_id) {
    formData.append('github_id', formValues.github_id);
  }
  if (formValues.github_link) {
    formData.append('github_link', formValues.github_link);
  }
  if (formValues.other_links && formValues.other_links.length > 0) {
    formData.append('other_links', JSON.stringify(formValues.other_links));
  }
  if (formValues.thumbnail && formValues.thumbnail.length > 0) {
    formData.append('thumbnail', formValues.thumbnail[0]);
  }

  return formData;
};

export const postProjectArchiveAdd = async ({ formValues }: PostProjectArchiveAddRequest) => {
  const data = convertToFormData(formValues);

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
