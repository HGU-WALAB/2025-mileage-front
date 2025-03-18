import { getUserInfo } from '@/apis/auth';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { UserResponse } from '@/types/auth';
import { useQuery } from '@tanstack/react-query';

const useGetUserInfoQuery = () => {
  return useQuery<UserResponse>({
    queryKey: [QUERY_KEYS.userInfo],
    queryFn: () => getUserInfo(),
    throwOnError: true,
  });
};

export default useGetUserInfoQuery;
