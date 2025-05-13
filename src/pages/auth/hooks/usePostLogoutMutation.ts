import { useAuthStore } from '@/stores';
import { useMutation } from '@tanstack/react-query';

import { postLogout } from '../apis/auth';

export const usePostLogoutMutation = () => {
  const { logout } = useAuthStore();

  return useMutation({
    mutationFn: postLogout,
    onSuccess: () => {
      logout();
    },
  });
};
