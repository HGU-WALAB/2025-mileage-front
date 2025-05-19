import { QUERY_KEYS } from '@/constants/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { patchProject } from '../apis/project';

export const usePatchProjectMutation = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, ...rest } = useMutation({
    mutationFn: patchProject,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.project],
      });
    },
  });

  return { patchProject: mutateAsync, ...rest };
};
