import { postScholarshipApply } from '@/apis/scholarship';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const usePostScholarshipApplyMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postScholarshipApply,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.isAppliedScholarship],
      });
    },
  });
};

export default usePostScholarshipApplyMutation;
