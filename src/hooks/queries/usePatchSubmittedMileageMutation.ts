import { patchSubmittedMileage } from '@/apis/mileage';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { getErrorMessage } from '@/utils/getErrorMessage';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ErrorResponse } from 'react-router-dom';

const usePatchSubmittedMileageMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: patchSubmittedMileage,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.submittedMileage],
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
};

export default usePatchSubmittedMileageMutation;
