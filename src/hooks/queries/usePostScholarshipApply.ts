import { postScholarshipApply } from '@/apis/scholarship';
import { useMutation } from '@tanstack/react-query';

const usePostScholarshipApply = () => {
  return useMutation({
    mutationFn: postScholarshipApply,
  });
};

export default usePostScholarshipApply;
