import { QUERY_KEYS } from '@/constants/queryKeys';
import { useQuery } from '@tanstack/react-query';

import { getUserInfo } from '../apis/auth';
import { UserResponse } from '../types/auth';

export const useGetUserInfoQuery = () => {
  const { data, ...rest } = useQuery<UserResponse>({
    queryKey: [QUERY_KEYS.userInfo],
    queryFn: () => getUserInfo(),
  });

  return { userInfo: data, ...rest };
};
