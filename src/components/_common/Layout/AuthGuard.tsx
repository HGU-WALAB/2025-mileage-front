import { ROUTE_PATH } from '@/constants/routePath';
import { useAuthStore } from '@/stores';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  // TODO: 유효한 토큰인지 판별하여 예외처리 하는 로직 필요
  const { isLogin } = useAuthStore();

  useEffect(() => {
    if (!isLogin) {
      return navigate(ROUTE_PATH.landing);
    }
  }, [navigate, isLogin]);

  return <>{children}</>;
};

export default AuthGuard;
