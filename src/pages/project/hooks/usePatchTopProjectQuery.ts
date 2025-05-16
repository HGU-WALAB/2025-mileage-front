import { useMutation } from '@tanstack/react-query';

import { patchTopProject } from '../apis/project';

export const usePatchTopProjectQuery = () => {
  const { mutateAsync, ...rest } = useMutation({
    mutationFn: patchTopProject,
  });

  return { patchTopProject: mutateAsync, ...rest };
};
