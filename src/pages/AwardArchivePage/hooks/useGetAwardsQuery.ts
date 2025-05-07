import { QUERY_KEYS } from '@/constants/queryKeys';
import { useSuspenseQuery } from '@tanstack/react-query';

import { getAwardList } from '../apis/award';
import { AwardResponse } from '../types/award';

export const useGetAwardsQuery = () => {
  const { data, ...rest } = useSuspenseQuery<AwardResponse[]>({
    queryKey: [QUERY_KEYS.award],
    queryFn: getAwardList,
  });

  return { awards: data, ...rest };
};
