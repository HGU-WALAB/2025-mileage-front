import { Button } from '@/components';

const HisnetLoginButton = () => {
  const handleClick = () => {
    alert('login');
  };
  return <Button label="로그인 버튼" onClick={handleClick} size="full" />;
};

export default HisnetLoginButton;
