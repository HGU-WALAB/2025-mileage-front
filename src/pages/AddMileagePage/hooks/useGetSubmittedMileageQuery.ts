import { QUERY_KEYS } from '@/constants/queryKeys';
import { useSuspenseQuery } from '@tanstack/react-query';

import { getSubmittedMileageList } from '../apis/addMileage';
import { SubmittedMileageResponse } from '../types/addMileage';

export const useGetSubmittedMileageQuery = () => {
  const { data, ...rest } = useSuspenseQuery<SubmittedMileageResponse[]>({
    queryKey: [QUERY_KEYS.submittedMileage],
    queryFn: () => getSubmittedMileageList(),
  });

  return { submittedMileageList: data, ...rest };
};
