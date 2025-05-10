import { getUserInfo } from '@/apis/auth';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { UserResponse } from '@/types/auth';
import { useQuery } from '@tanstack/react-query';

export const useGetUserInfoQuery = () => {
  const { data, ...rest } = useQuery<UserResponse>({
    queryKey: [QUERY_KEYS.userInfo],
    queryFn: () => getUserInfo(),
  });

  return { userInfo: data, ...rest };
};
