import { QUERY_KEYS } from '@/constants/queryKeys';
import { TOAST_MESSAGES } from '@/constants/toastMessage';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { deleteProject } from '../apis/project';

export const useDeleteProjectMutation = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, ...rest } = useMutation({
    mutationFn: deleteProject,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.project],
      });
      await queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.topProject],
      });

      toast.success(TOAST_MESSAGES.deleteProject.succeed);
    },
    onError: () => {
      toast.error(TOAST_MESSAGES.deleteProject.failed);
    },
  });

  return { deleteProject: mutateAsync, ...rest };
};
