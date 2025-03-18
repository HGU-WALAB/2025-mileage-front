import { getIsAppliedScholarship } from '@/apis/scholarship';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { IsAppliedScholarshipResponse } from '@/types/scholarship';
import { useQuery } from '@tanstack/react-query';

const useGetIsAppliedScholarshipQuery = () => {
  return useQuery<IsAppliedScholarshipResponse>({
    queryKey: [QUERY_KEYS.isAppliedScholarship],
    queryFn: () => getIsAppliedScholarship(),
  });
};

export default useGetIsAppliedScholarshipQuery;
