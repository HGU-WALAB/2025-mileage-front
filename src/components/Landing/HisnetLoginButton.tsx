import { Button } from '@/components';

const HisnetLoginButton = () => {
  const handleClick = () => {
    alert('login');
  };
  return <Button label="HisnetLoginButton" onClick={handleClick} size="full" />;
};

export default HisnetLoginButton;
