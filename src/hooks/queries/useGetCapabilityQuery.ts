import { getCapability } from '@/apis/capability';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { CapabilityResponse } from '@/types/capability';
import { useSuspenseQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

const useGetCapabilityQuery = () => {
  return useSuspenseQuery<CapabilityResponse[], AxiosError>({
    queryKey: [QUERY_KEYS.capability],
    queryFn: () => getCapability(),
  });
};

export default useGetCapabilityQuery;
