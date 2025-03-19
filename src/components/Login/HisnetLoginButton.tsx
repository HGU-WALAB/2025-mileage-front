import { Button } from '@/components';
import { useLogin } from '@/hooks';
import { styled } from '@mui/material';

const HisnetLoginButton = () => {
  const { handleHisnetAuth } = useLogin();

  return (
    <S.LoginButton
      label="히즈넷으로 로그인하기"
      onClick={handleHisnetAuth}
      size="full"
    />
  );
};

export default HisnetLoginButton;

const S = {
  LoginButton: styled(Button)`
    background: linear-gradient(135deg, #8043ff, #2e68ff);
    ${({ theme }) => theme.typography.h3};
    height: 3rem;
    width: 300px;
  `,
};
