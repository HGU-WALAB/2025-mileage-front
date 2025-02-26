import { getSubmittedMileageList } from '@/apis/mileage';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { SubmittedMileageResponse } from '@/types/mileage';
import { useQuery } from '@tanstack/react-query';

const useGetSubmittedMileageQuery = (studentId: string) => {
  return useQuery<SubmittedMileageResponse[]>({
    queryKey: [QUERY_KEYS.submittedMileage, studentId],
    queryFn: () => getSubmittedMileageList({ studentId }),
    throwOnError: true,
  });
};

export default useGetSubmittedMileageQuery;
