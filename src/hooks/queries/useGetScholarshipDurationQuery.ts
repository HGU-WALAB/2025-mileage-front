import { getScholarshipDuration } from '@/apis/scholarship';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { ScholarshipDurationResponse } from '@/types/scholarship';
import { useQuery } from '@tanstack/react-query';

const useGetScholarshipDurationQuery = () => {
  return useQuery<ScholarshipDurationResponse>({
    queryKey: [QUERY_KEYS.scholarshipDuration],
    queryFn: () => getScholarshipDuration(),
  });
};

export default useGetScholarshipDurationQuery;
