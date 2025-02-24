import { postLogin } from '@/apis/auth';
import { ROUTE_PATH } from '@/constants/routePath';
import { useAuthStore } from '@/stores';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const usePostLoginMutation = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: postLogin,
    onSuccess: res => {
      toast.success('어서오세요!');
      login(
        {
          studentId: res.studentId,
          studentName: res.studentName,
        },
        res.currentSemester,
      );
      navigate(ROUTE_PATH.dashboard);
    },
  });
};

export default usePostLoginMutation;
