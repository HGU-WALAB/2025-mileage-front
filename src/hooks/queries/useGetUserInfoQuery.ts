import { getUserInfo } from '@/apis/auth';
import { UserResponse } from '@/types/auth';
import { useQuery } from '@tanstack/react-query';

const useGetUserInfoQuery = (studentId: string) => {
  return useQuery<UserResponse>({
    queryKey: ['userInfo', studentId],
    queryFn: () => getUserInfo({ studentId }),
    throwOnError: true,
  });
};

export default useGetUserInfoQuery;
