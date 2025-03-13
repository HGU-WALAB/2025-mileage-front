import { getUserInfo } from '@/apis/auth';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { useAuthStore } from '@/stores';
import { UserResponse } from '@/types/auth';
import { useQuery } from '@tanstack/react-query';

const useGetUserInfoQuery = () => {
  const { student } = useAuthStore();
  return useQuery<UserResponse>({
    queryKey: [QUERY_KEYS.userInfo, student.studentId],
    queryFn: () => getUserInfo({ studentId: student.studentId }),
    throwOnError: true,
  });
};

export default useGetUserInfoQuery;
