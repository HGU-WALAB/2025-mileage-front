import { useEffect } from 'react';

import { HISNET_AUTH_URL } from '../constants/auth';
import { usePostLoginMutation } from './usePostLoginMutation';

export const useLogin = () => {
  const { postLogin, isSuccess } = usePostLoginMutation();

  useEffect(() => {
    (async () => {
      const currentUrl = new URL(window.location.href);
      const params = new URLSearchParams(currentUrl.search);
      const token = params.get('token');

      if (token) {
        await postLogin({ token });

        params.delete('token');
        currentUrl.search = params.toString();
        window.history.replaceState({}, '', currentUrl.toString());
      }
    })();
  }, [postLogin]);

  const handleHisnetAuth = () => {
    const returnUrl = window.location.href;
    window.location.href = HISNET_AUTH_URL(returnUrl);
  };

  return { handleHisnetAuth, isLoginSucceed: isSuccess };
};
