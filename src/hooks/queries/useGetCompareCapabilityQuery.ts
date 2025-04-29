import { getCompareCapability } from '@/apis/capability';
import { QUERY_KEYS } from '@/constants/queryKeys';
import {
  CompareCapabilityRequest,
  CompareCapabilityResponse,
} from '@/types/capability';
import { useSuspenseQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useGetCompareCapabilityQuery = ({
  term,
  entryYear,
  major1,
  major2,
}: CompareCapabilityRequest) => {
  const { data, ...rest } = useSuspenseQuery<
    CompareCapabilityResponse[],
    AxiosError
  >({
    queryKey: [QUERY_KEYS.compareCapability, term, entryYear, major1, major2],
    queryFn: () => getCompareCapability({ term, entryYear, major1, major2 }),
  });

  return { compareCapability: data, ...rest };
};
