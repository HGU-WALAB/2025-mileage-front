import { QUERY_KEYS } from '@/constants/queryKeys';
import { useSuspenseQuery } from '@tanstack/react-query';

import { getIsAppliedScholarship } from '../apis/scholarship';
import { IsAppliedScholarshipResponse } from '../types/scholarship';

export const useGetIsAppliedScholarshipQuery = () => {
  const { data, ...rest } = useSuspenseQuery<IsAppliedScholarshipResponse>({
    queryKey: [QUERY_KEYS.isAppliedScholarship],
    queryFn: () => getIsAppliedScholarship(),
  });

  return { isApplied: data, ...rest };
};
