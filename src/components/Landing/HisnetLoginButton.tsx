import { Button } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import { useAuthStore } from '@/stores';
import { useNavigate } from 'react-router-dom';

const HisnetLoginButton = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const handleClick = () => {
    alert('login');
    login(
      {
        studentId: '22000770',
        studentName: '최혜림',
      },
      '2025-1',
    );
    navigate(ROUTE_PATH.dashboard);
  };

  return <Button label="로그인 버튼" onClick={handleClick} size="full" />;
};

export default HisnetLoginButton;
