import { QUERY_KEYS } from '@/constants/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postProject } from '../apis/project';

export const usePostProjectMutation = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, ...rest } = useMutation({
    mutationFn: postProject,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.project],
      });
    },
  });

  return { postProject: mutateAsync, ...rest };
};
