import { QUERY_KEYS } from '@/constants/queryKeys';
import { useSuspenseQuery } from '@tanstack/react-query';

import { getEtcMileageList } from '../apis/mileage';
import { EtcMileageResponse } from '../types/mileage';

export const useGetEtcMileageQuery = () => {
  const { data, ...rest } = useSuspenseQuery<EtcMileageResponse[]>({
    queryKey: [QUERY_KEYS.etcMileageList],
    queryFn: () => getEtcMileageList(),
  });

  return { etcMileageList: data, ...rest };
};
