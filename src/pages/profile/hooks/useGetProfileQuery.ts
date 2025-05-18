import { QUERY_KEYS } from '@/constants/queryKeys';
import { useSuspenseQuery } from '@tanstack/react-query';

import { getProfile } from '../apis/profile';
import { ProfileResponse } from '../types/profile';

export const useGetProfileQuery = () => {
  const { data, ...rest } = useSuspenseQuery<ProfileResponse>({
    queryKey: [QUERY_KEYS.profile],
    queryFn: () => getProfile(),
  });

  return { profile: data, ...rest };
};
