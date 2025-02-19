import { Button } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import { useNavigate } from 'react-router-dom';

const HisnetLoginButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    alert('login');
    navigate(ROUTE_PATH.dashboard);
  };

  return <Button label="로그인 버튼" onClick={handleClick} size="full" />;
};

export default HisnetLoginButton;
