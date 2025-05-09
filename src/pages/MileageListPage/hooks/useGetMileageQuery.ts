import { QUERY_KEYS } from '@/constants/queryKeys';
import { useQuery } from '@tanstack/react-query';

import { getMileageList } from '../apis/mileage';
import { MileageRequest, MileageResponse } from '../types/mileage';

export const useGetMileageQuery = ({
  keyword,
  category,
  semester,
  done,
}: MileageRequest) => {
  return useQuery<MileageResponse[]>({
    queryKey: [QUERY_KEYS.mileageList, keyword, category, semester, done],
    queryFn: () =>
      getMileageList({
        keyword,
        category,
        semester,
        done,
      }),
    throwOnError: true,
  });
};
