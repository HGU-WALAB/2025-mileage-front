import { Button } from '@/components';
import { HISNET_AUTH_URL } from '@/constants/auth';
import usePostLoginMutation from '@/hooks/queries/usePostLoginMutation';
import { styled } from '@mui/material';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const HisnetLoginButton = () => {
  const [, setSearchParams] = useSearchParams();
  const { mutate: postLogin } = usePostLoginMutation();

  useEffect(() => {
    const token = new URL(window.location.href).searchParams.get('token');
    if (token) {
      postLogin({ token });
    }
  }, [postLogin]);

  const handleHisnetAuth = () => {
    // 히즈넷 로그인 로직
    const returnUrl = window.location.href;
    window.location.href = HISNET_AUTH_URL(returnUrl);

    // mock token 추가로직
    setSearchParams('token=1t2o3k4e5n');
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
