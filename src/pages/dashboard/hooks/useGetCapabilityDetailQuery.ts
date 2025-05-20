import { QUERY_KEYS } from '@/constants/queryKeys';
import { useSuspenseQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { getCapabilityDetail } from '../apis/capability';
import { CapabilityDetailResponse } from '../types/capability';

export const useGetCapabilityDetailQuery = () => {
  const { data, ...rest } = useSuspenseQuery<
    CapabilityDetailResponse[],
    AxiosError
  >({
    queryKey: [QUERY_KEYS.capabilityDetail],
    queryFn: () => getCapabilityDetail(),
  });

  return { capabilityDetail: data, ...rest };
};
