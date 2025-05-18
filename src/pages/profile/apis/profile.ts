import { ENDPOINT } from '@/apis/endPoint';
import { http } from '@/apis/http';
import { toFormData } from '@/utils/toFormData';
import { GenericFormData } from 'axios';

import { PatchProfileRequest, ProfileResponse } from '@profile/types/profile';

export const getProfile = async () => {
  const response = await http.get<ProfileResponse>(`${ENDPOINT.PROFILE}`);
  return response;
};

export const patchProfile = async ({ formValues }: PatchProfileRequest) => {
  const data = toFormData(formValues);

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
