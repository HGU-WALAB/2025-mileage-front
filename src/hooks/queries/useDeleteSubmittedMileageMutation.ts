import { deleteSubmittedMileage } from '@/apis/mileage';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { TOAST_MESSAGES } from '@/constants/toastMessage';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const useDeleteSubmittedMileageMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
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
};

export default useDeleteSubmittedMileageMutation;
