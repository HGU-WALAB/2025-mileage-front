import { deleteSubmittedMileage } from '@/apis/mileage';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useDeleteSubmittedMileageMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteSubmittedMileage,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.submittedMileage],
      });
    },
  });
};

export default useDeleteSubmittedMileageMutation;
