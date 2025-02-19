import { postScholarshipApply } from '@/apis/scholarship';
import { useMutation } from '@tanstack/react-query';

const usePostScholarshipApply = () => {
  return useMutation({
    mutationFn: postScholarshipApply,
    onSuccess: () => {
      alert('신청 성공!');
    },
  });
};

export default usePostScholarshipApply;
