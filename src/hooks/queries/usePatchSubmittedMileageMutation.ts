import { patchSubmittedMileage } from '@/apis/mileage';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const usePatchSubmittedMileageMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: patchSubmittedMileage,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.submittedMileage],
      });
    },
  });
};

export default usePatchSubmittedMileageMutation;
