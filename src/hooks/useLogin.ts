import { HISNET_AUTH_URL } from '@/constants/auth';
import { usePostLoginMutation } from '@/hooks/queries';
import { useEffect } from 'react';

const useLogin = () => {
  const { mutate: postLogin, isSuccess } = usePostLoginMutation();

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

  return { handleHisnetAuth, isLoginSucceed: isSuccess };
};

export default useLogin;
