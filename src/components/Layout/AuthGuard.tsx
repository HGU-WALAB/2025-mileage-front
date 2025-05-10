import { ROUTE_PATH } from '@/constants/routePath';
import { useAuthStore } from '@/stores';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const { isLogin } = useAuthStore();

  useEffect(() => {
    if (!isLogin) {
      return navigate(ROUTE_PATH.login);
    }
  }, [navigate, isLogin]);

  return <>{children}</>;
};

export default AuthGuard;
