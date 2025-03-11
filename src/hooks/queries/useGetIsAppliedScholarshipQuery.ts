import { getIsAppliedScholarship } from '@/apis/scholarship';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { useAuthStore } from '@/stores';
import { IsAppliedScholarshipResponse } from '@/types/scholarship';
import { useQuery } from '@tanstack/react-query';

const useGetIsAppliedScholarshipQuery = () => {
  const { student } = useAuthStore();
  return useQuery<IsAppliedScholarshipResponse>({
    queryKey: [QUERY_KEYS.isAppliedScholarship],
    queryFn: () => getIsAppliedScholarship({ studentId: student.studentId }),
    throwOnError: true,
  });
};

export default useGetIsAppliedScholarshipQuery;
