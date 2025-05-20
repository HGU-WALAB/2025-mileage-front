import { QUERY_KEYS } from '@/constants/queryKeys';
import { getErrorMessage } from '@/utils/getErrorMessage';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ErrorResponse } from 'react-router-dom';

import { patchProfile } from '@profile/apis/profile';

export const usePatchSubmittedProfileMutation = () => {
  const queryClient = useQueryClient();

  const { mutate, ...rest } = useMutation({
    mutationFn: patchProfile,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.profile],
      });
    },
    onError: error => {
      if ((error as AxiosError).isAxiosError) {
        const axiosError = error as AxiosError;
        const errorData = axiosError.response?.data as ErrorResponse;

        if (axiosError.status === 400 && errorData) {
          error.message = getErrorMessage('invalidFileType');
        }
      }
    },
  });

  return { patchProfile: mutate, ...rest };
};