import { QUERY_KEYS } from '@/constants/queryKeys';
import { useSuspenseQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { getCapability } from '../apis/capability';
import { CapabilityResponse } from '../types/capability';

export const useGetCapabilityQuery = () => {
  const { data, ...rest } = useSuspenseQuery<CapabilityResponse[], AxiosError>({
    queryKey: [QUERY_KEYS.capability],
    queryFn: () => getCapability(),
  });

  return { capability: data, ...rest };
};
