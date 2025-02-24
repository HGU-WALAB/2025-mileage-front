import { Button } from '@/components';
import { HISNET_AUTH_URL } from '@/constants/auth';
import { usePostLoginMutation } from '@/hooks/queries';
import { styled } from '@mui/material';
import { useEffect } from 'react';

const HisnetLoginButton = () => {
  const { mutate: postLogin } = usePostLoginMutation();

  useEffect(() => {
    const token = new URL(window.location.href).searchParams.get('token');
    if (token) {
      postLogin({ token });
    }
  }, [postLogin]);

  const handleHisnetAuth = () => {
    const returnUrl = window.location.href;
    window.location.href = HISNET_AUTH_URL(returnUrl);
  };

  return <S.LoginButton label="LOGIN" onClick={handleHisnetAuth} size="full" />;
};

export default HisnetLoginButton;

const S = {
  LoginButton: styled(Button)`
    background: linear-gradient(135deg, #8043ff, #2e68ff);
    font-weight: bold;
  `,
};
