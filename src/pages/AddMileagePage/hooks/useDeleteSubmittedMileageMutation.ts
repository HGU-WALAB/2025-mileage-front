import { QUERY_KEYS } from '@/constants/queryKeys';
import { TOAST_MESSAGES } from '@/constants/toastMessage';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { deleteSubmittedMileage } from '../apis/addMileage';

export const useDeleteSubmittedMileageMutation = () => {
  const queryClient = useQueryClient();

  const { mutate, ...rest } = useMutation({
    mutationFn: deleteSubmittedMileage,
    onSuccess: async () => {
      toast.success(TOAST_MESSAGES.deleteMileage.succeed);
      await queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.submittedMileage],
      });
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.deleteMileage.failed);
    },
  });

  return { deleteMileage: mutate, ...rest };
};
