import { postScholarshipApply } from '@/apis/scholarship';
import { useMutation } from '@tanstack/react-query';

const usePostScholarshipApplyMutation = () => {
  return useMutation({
    mutationFn: postScholarshipApply,
  });
};

export default usePostScholarshipApplyMutation;
