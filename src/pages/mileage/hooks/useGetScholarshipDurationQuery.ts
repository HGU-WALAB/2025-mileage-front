import { QUERY_KEYS } from '@/constants/queryKeys';
import { useQuery } from '@tanstack/react-query';

import { getScholarshipDuration } from '../apis/scholarship';
import { ScholarshipDurationResponse } from '../types/scholarship';

export const useGetScholarshipDurationQuery = () => {
  const { data, ...rest } = useQuery<ScholarshipDurationResponse>({
    queryKey: [QUERY_KEYS.scholarshipDuration],
    queryFn: () => getScholarshipDuration(),
  });

  return { scholarshipDuration: data, ...rest };
};
