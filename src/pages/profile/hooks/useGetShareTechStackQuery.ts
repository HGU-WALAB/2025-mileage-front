import { QUERY_KEYS } from '@/constants/queryKeys';
import { useSuspenseQuery } from '@tanstack/react-query';

import { useParams } from 'react-router-dom';
import { getShareTechStack } from '../apis/share';
import { TechStack } from '../types/profile';

export const useGetShareTechStackQuery = () => {
  const { id } = useParams<{ id: string }>();
  const { data, ...rest } = useSuspenseQuery<TechStack, Error, string[]>({
    queryKey: [QUERY_KEYS.techStackShare],
    queryFn: () => getShareTechStack(id ?? ''),
    select: data => data.techStack,
  });

  return { techStack: data, ...rest };
};
