import { QUERY_KEYS } from '@/constants/queryKeys';
import { useSuspenseQuery } from '@tanstack/react-query';

import { getProject } from '../apis/project';
import { ProjectResponse } from '../types/project';

export const useGetProjectQuery = (projectId: string) => {
  const { data, ...rest } = useSuspenseQuery<ProjectResponse>({
    queryKey: [QUERY_KEYS.project, projectId],
    queryFn: () => getProject({ projectId }),
  });

  return { project: data, ...rest };
};
