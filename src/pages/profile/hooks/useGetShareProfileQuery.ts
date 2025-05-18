import { QUERY_KEYS } from '@/constants/queryKeys';
import { useSuspenseQuery } from '@tanstack/react-query';

import { useParams } from 'react-router-dom';
import { getShareProfile } from '../apis/share';
import { ProfileResponse } from '../types/profile';

export const useGetShareProfileQuery = () => {
  const { id } = useParams<{ id: string }>();
  const { data, ...rest } = useSuspenseQuery<ProfileResponse>({
    queryKey: [QUERY_KEYS.profileShare],
    queryFn: () => getShareProfile(id ?? ''),
  });

  return { profile: data, ...rest };
};
