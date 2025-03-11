import { postLogin } from '@/apis/auth';
import { useAuthStore } from '@/stores';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const usePostLoginMutation = () => {
  const { login } = useAuthStore();

  return useMutation({
    mutationFn: postLogin,
    onSuccess: res => {
      toast.success('환영합니다!');
      login(
        {
          studentId: res.studentId,
          studentName: res.studentName,
          studentType: res.studentType,
        },
        res.currentSemester,
      );
    },
  });
};

export default usePostLoginMutation;
