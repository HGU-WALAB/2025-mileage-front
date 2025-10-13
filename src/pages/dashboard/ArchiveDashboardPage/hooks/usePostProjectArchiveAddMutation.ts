import { QUERY_KEYS } from '@/constants/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postProjectArchiveAdd } from '../apis/projectArchiveAdd';

export const usePostProjectArchiveAddMutation = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, ...rest } = useMutation({
    mutationFn: postProjectArchiveAdd,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.project, 'archive'],
      });
    },
  });

  return { postProjectArchiveAdd: mutateAsync, ...rest };
};
