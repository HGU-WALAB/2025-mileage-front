import { QUERY_KEYS } from '@/constants/queryKeys';
import { useSuspenseQuery } from '@tanstack/react-query';

import { getProjectList } from '../apis/project';
import { ProjectResponse } from '../types/project';

export const useGetProjectsQuery = () => {
  const { data, ...rest } = useSuspenseQuery<ProjectResponse[]>({
    queryKey: [QUERY_KEYS.project],
    queryFn: getProjectList,
  });

  return { projects: data, ...rest };
};
