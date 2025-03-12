import { ROUTE_PATH } from '@/constants/routePath';
import { useAuthStore } from '@/stores';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const { isLogin } = useAuthStore();

  useEffect(() => {
    if (!isLogin) {
      toast.error('로그인 후 사용할 수 있습니다.');
      return navigate(ROUTE_PATH.login);
    }
  }, [navigate, isLogin]);

  return <>{children}</>;
};

export default AuthGuard;
