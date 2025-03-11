import { getUserInfo } from '@/apis/auth';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { UserResponse } from '@/types/auth';
import { useQuery } from '@tanstack/react-query';

const useGetUserInfoQuery = (studentId: string) => {
  return useQuery<UserResponse>({
    queryKey: [QUERY_KEYS.userInfo, studentId],
    queryFn: () => getUserInfo({ studentId }),
    throwOnError: true,
  });
};

export default useGetUserInfoQuery;
