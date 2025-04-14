import { postLogin } from '@/apis/auth';
import { TOAST_MESSAGES } from '@/constants/toastMessage';
import { amplitudeInitializer } from '@/service/amplitude/amplitudeInitializer';
import { useAuthStore } from '@/stores';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const usePostLoginMutation = () => {
  const { init } = amplitudeInitializer();
  const { login } = useAuthStore();

  return useMutation({
    mutationFn: postLogin,
    onSuccess: res => {
      init(res.studentId);
      toast.success(TOAST_MESSAGES.welcome);
      login(
        {
          studentId: res.studentId,
          studentName: res.studentName,
          studentType: res.studentType,
          term: res.term,
        },
        res.currentSemester,
      );
    },
  });
};

export default usePostLoginMutation;
