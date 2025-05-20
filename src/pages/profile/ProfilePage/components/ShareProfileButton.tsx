import { Button } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import { useAuthStore } from '@/stores';
import { useNavigate } from 'react-router-dom';

export const ShareProfileButton = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  return (
    <Button
      label="공유 프로필 바로가기"
      onClick={() => navigate(ROUTE_PATH.profileShare(user.studentId))}
    />
  );
};
