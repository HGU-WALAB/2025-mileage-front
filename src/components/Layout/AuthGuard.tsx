import { ROUTE_PATH } from '@/constants/routePath';
import { useAuthStore } from '@/stores';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const isLogin = useAuthStore(state => state.isLogin);

  useEffect(() => {
    if (!isLogin) {
      navigate(ROUTE_PATH.login, { replace: true });
    }
  }, [navigate, isLogin]);

  return <>{children}</>;
};

export default AuthGuard;
