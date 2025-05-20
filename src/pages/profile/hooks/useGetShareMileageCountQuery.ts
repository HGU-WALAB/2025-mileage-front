import { QUERY_KEYS } from '@/constants/queryKeys';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { getShareMileageCount } from '../apis/share';

export const useGetShareMileageCountQuery = () => {
  const { id } = useParams<{ id: string }>();
  const { data, ...rest } = useSuspenseQuery<
    { mileageCount: number },
    Error,
    number
  >({
    queryKey: [QUERY_KEYS.mileageCountShare],
    queryFn: () => getShareMileageCount(id ?? ''),
    select: data => data.mileageCount,
  });

  return { mileageCount: data, ...rest };
};
