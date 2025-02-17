import { postNewMileage } from '@/apis/mileage';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const usePostNewMileageMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postNewMileage,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.submittedMileage],
      });
    },
  });
};

export default usePostNewMileageMutation;
