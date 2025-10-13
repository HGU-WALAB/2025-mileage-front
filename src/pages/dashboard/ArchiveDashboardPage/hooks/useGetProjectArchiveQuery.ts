import { QUERY_KEYS } from '@/constants/queryKeys';
import { useSuspenseQuery } from '@tanstack/react-query';

import { getProjectArchiveList } from '@project/apis/project';
import { ProjectArchiveResponse } from '@project/types/projectArchive';

export const useGetProjectArchiveQuery = () => {
  const { data, ...rest } = useSuspenseQuery<ProjectArchiveResponse[]>({
    queryKey: [QUERY_KEYS.project, 'archive'],
    queryFn: getProjectArchiveList,
  });

  return { projects: data, ...rest };
};
