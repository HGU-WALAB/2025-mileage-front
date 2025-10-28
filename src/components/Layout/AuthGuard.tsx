import { ROUTE_PATH } from '@/constants/routePath';
import { useAuthStore } from '@/stores';
import { useMaintenanceCheck } from '@/hooks/useMaintenanceCheck';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MaintenancePage from '@/components/MaintenancePage/MaintenancePage';

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const isLogin = useAuthStore(state => state.isLogin);
  const { maintenanceStatus, isLoading } = useMaintenanceCheck();

  useEffect(() => {
    // console.log('AuthGuard 상태:', { isLoading, maintenanceStatus, isLogin });
    // 점검 상태를 확인 중이거나 점검 모드가 아닐 때만 로그인 체크
    if (!isLoading && !maintenanceStatus?.maintenanceMode && !isLogin) {
      // console.log('로그인 페이지로 이동');
      navigate(ROUTE_PATH.login, { replace: true });
    }
  }, [navigate, isLogin, isLoading, maintenanceStatus]);

  // 점검 상태 로딩 중
  if (isLoading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
      }}>
        로딩 중...
      </div>
    );
  }

  // 점검 모드가 활성화되어 있으면 점검 페이지 표시
  if (maintenanceStatus?.maintenanceMode) {
    console.log('점검 페이지 표시:', maintenanceStatus);
    return <MaintenancePage status={maintenanceStatus} />;
  }

  // 로그인하지 않은 경우 아무것도 렌더링하지 않음
  if (!isLogin) {
    return null;
  }

  return <>{children}</>;
};

export default AuthGuard;
