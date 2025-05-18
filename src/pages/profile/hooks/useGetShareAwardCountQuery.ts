import { QUERY_KEYS } from '@/constants/queryKeys';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { getShareAwardCount } from '../apis/share';

export const useGetShareAwardCountQuery = () => {
  const { id } = useParams<{ id: string }>();
  const { data, ...rest } = useSuspenseQuery<
    { awardCount: number },
    Error,
    number
  >({
    queryKey: [QUERY_KEYS.awardCountShare],
    queryFn: () => getShareAwardCount(id ?? ''),
    select: data => data.awardCount,
  });

  return { awardCount: data, ...rest };
};
