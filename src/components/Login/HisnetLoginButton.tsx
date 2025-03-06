import { Button } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import useLogin from '@/hooks/useLogin';
import { styled } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HisnetLoginButton = () => {
  const navigate = useNavigate();
  const { handleHisnetAuth, isLoginSucceed } = useLogin();

  useEffect(() => {
    if (isLoginSucceed) navigate(ROUTE_PATH.dashboard);
  }, [isLoginSucceed]);

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
