import { QUERY_KEYS } from '@/constants/queryKeys';
import { useSuspenseQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { getActivityRecommend } from '../apis/capability';
import { ActivityRecommendResponse } from '../types/capability';

export const useGetActivityRecommendQuery = () => {
  const { data, ...rest } = useSuspenseQuery<
    ActivityRecommendResponse,
    AxiosError
  >({
    queryKey: [QUERY_KEYS.activityRecommend],
    queryFn: () => getActivityRecommend(),
  });

  return { activityRecommend: data, ...rest };
};
