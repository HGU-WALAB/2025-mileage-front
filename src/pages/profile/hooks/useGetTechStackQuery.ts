import { QUERY_KEYS } from '@/constants/queryKeys';
import { useSuspenseQuery } from '@tanstack/react-query';

import { getTechStack } from '../apis/profile';
import { TechStack } from '../types/profile';

export const useGetTechStackQuery = () => {
  const { data, ...rest } = useSuspenseQuery<TechStack, Error, string[]>({
    queryKey: [QUERY_KEYS.techStack],
    queryFn: () => getTechStack(),
    select: data => data.techStack,
  });

  return { techStack: data, ...rest };
};
