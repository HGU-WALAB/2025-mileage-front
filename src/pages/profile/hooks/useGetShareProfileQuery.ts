import { QUERY_KEYS } from '@/constants/queryKeys';
import { useSuspenseQuery } from '@tanstack/react-query';

import { getShareProfile } from '../apis/share';
import { ProfileResponse } from '../types/profile';

export const useGetShareProfileQuery = () => {
  const { data, ...rest } = useSuspenseQuery<ProfileResponse>({
    queryKey: [QUERY_KEYS.profileShare],
    queryFn: () => getShareProfile(),
  });

  return { profile: data, ...rest };
};
