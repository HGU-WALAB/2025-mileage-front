import { getSubmittedMileageList } from '@/apis/mileage';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { useAuthStore } from '@/stores';
import { SubmittedMileageResponse } from '@/types/mileage';
import { useQuery } from '@tanstack/react-query';

const useGetSubmittedMileageQuery = () => {
  const { student } = useAuthStore();
  return useQuery<SubmittedMileageResponse[]>({
    queryKey: [QUERY_KEYS.submittedMileage, student.studentId],
    queryFn: () => getSubmittedMileageList({ studentId: student.studentId }),
    throwOnError: true,
  });
};

export default useGetSubmittedMileageQuery;
