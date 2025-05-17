import { QUERY_KEYS } from '@/constants/queryKeys';
import { useSuspenseQuery } from '@tanstack/react-query';

import { getTopProject } from '../apis/project';
import { ProjectResponse } from '../types/project';

export const useGetTopProjectQuery = () => {
  const { data, ...rest } = useSuspenseQuery<ProjectResponse | null>({
    queryKey: [QUERY_KEYS.topProject],
    queryFn: () => getTopProject(),
  });

  return { topProject: data, ...rest };
};
