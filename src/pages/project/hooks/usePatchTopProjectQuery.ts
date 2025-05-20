import { QUERY_KEYS } from '@/constants/queryKeys';
import { TOAST_MESSAGES } from '@/constants/toastMessage';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { patchTopProject } from '../apis/project';

export const usePatchTopProjectQuery = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, ...rest } = useMutation({
    mutationFn: patchTopProject,
    onSuccess: async () => {
      toast.success(TOAST_MESSAGES.patchTopProject.succeed);
      await queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.topProject],
      });
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.patchTopProject.failed);
    },
  });

  return { patchTopProject: mutateAsync, ...rest };
};
