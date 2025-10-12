import { useState, useEffect } from 'react';
import getMaintenanceStatus from '../apis/maintenance';
import { MaintenanceStatus } from '@/types/maintenance';
import { useAuth } from './useAuth';
import { useGetUserInfoQuery } from '@/pages/auth/hooks/useGetUserInfoQuery';

export const useMaintenanceCheck = () => {
  const [maintenanceStatus, setMaintenanceStatus] = useState<MaintenanceStatus | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { isLoggedIn } = useAuth();
  const { userInfo, isLoading: userInfoLoading } = useGetUserInfoQuery();
  
  useEffect(() => {
    // 로그인하지 않았거나 사용자 정보가 로딩 중이면 점검 상태 체크 안함
    if (!isLoggedIn || userInfoLoading) {
      setMaintenanceStatus(null);
      setIsLoading(false);
      return;
    }
    
    // 사용자 정보가 없으면 점검 상태 체크 안함
    if (!userInfo) {
      setMaintenanceStatus(null);
      setIsLoading(false);
      return;
    }
    
    const checkMaintenance = async () => {
      setIsLoading(true);
      try {
        console.log('점검 상태 확인 시작 - 사용자 이메일:', userInfo.studentEmail);
        // 사용자 이메일을 포함해서 점검 상태 확인
        const status = await getMaintenanceStatus(userInfo.studentEmail);
        console.log('점검 상태 응답:', status);
        setMaintenanceStatus(status);
      } catch (error) {
        console.error('점검 상태 확인 실패:', error);
        // 에러 발생 시 점검 모드 비활성화
        setMaintenanceStatus(null);
      } finally {
        setIsLoading(false);
      }
    };
    
    checkMaintenance();
    const interval = setInterval(checkMaintenance, 60000 * 10);
    
    return () => clearInterval(interval);
  }, [isLoggedIn, userInfo, userInfoLoading]); // 로그인 상태와 사용자 정보가 변경될 때마다 체크
  
  return { maintenanceStatus, isLoading };
};
