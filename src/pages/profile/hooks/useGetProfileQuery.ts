import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { getProfile } from '@profile/apis/profile';
import { ProfileResponse } from '@profile/types/profile';

export const useGetProfileQuery = () => {
  const {
    data: profile,
  } = useQuery<ProfileResponse>({
    queryKey: [QUERY_KEYS.profile],
    queryFn: getProfile,
  });

  return {
    profile,
  };
};