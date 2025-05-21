import { QUERY_KEYS } from '@/constants/queryKeys';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { ProjectResponse } from '@project/types/project';
import { getShareTopProject } from '../apis/share';

export const useGetShareTopProjectQuery = () => {
  const { id } = useParams<{ id: string }>();
  const { data, ...rest } = useSuspenseQuery<ProjectResponse | null>({
    queryKey: [QUERY_KEYS.topProjectShare],
    queryFn: () => getShareTopProject(id ?? ''),
  });

  return { topProject: data, ...rest };
};
