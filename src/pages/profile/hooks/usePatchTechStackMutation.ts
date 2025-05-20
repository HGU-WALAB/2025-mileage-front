import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { patchTechStack } from '../apis/profile'; // 본인 api 경로에 맞게 수정
import { QUERY_KEYS } from '@/constants/queryKeys';
import { TOAST_MESSAGES } from '@/constants/toastMessage';

export const usePatchTechStackMutation = () => {
  const queryClient = useQueryClient();

  const { mutate, ...rest } = useMutation({
    mutationFn: patchTechStack,
    onSuccess: async () => {
        toast.success(TOAST_MESSAGES.patchTechStack.succeed);
        await queryClient.invalidateQueries({
            queryKey: [QUERY_KEYS.techStack]
        });
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.patchTechStack.failed);
    },
  });

  return { patchTechStack: mutate, ...rest };
};
