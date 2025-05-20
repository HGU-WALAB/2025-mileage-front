import { QUERY_KEYS } from '@/constants/queryKeys';
import { TOAST_MESSAGES } from '@/constants/toastMessage';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { patchTechStack } from '../apis/profile';

export const usePatchTopProjectQuery = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, ...rest } = useMutation({
    mutationFn: patchTechStack,
    onSuccess: async () => {
      toast.success(TOAST_MESSAGES.patchTechStack.succeed);
      await queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.techStack],
      });
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.patchTechStack.failed);
    },
  });

  return { patchTechStack: mutateAsync, ...rest };
};
