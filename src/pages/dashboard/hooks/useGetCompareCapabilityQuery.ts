import { QUERY_KEYS } from '@/constants/queryKeys';
import { useSuspenseQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { getCompareCapability } from '../apis/capability';
import {
  CompareCapabilityRequest,
  CompareCapabilityResponse,
} from '../types/capability';

export const useGetCompareCapabilityQuery = ({
  term,
  entryYear,
  major,
}: CompareCapabilityRequest) => {
  const { data, ...rest } = useSuspenseQuery<
    CompareCapabilityResponse[],
    AxiosError
  >({
    queryKey: [QUERY_KEYS.compareCapability, term, entryYear, major],
    queryFn: () => getCompareCapability({ term, entryYear, major }),
  });

  return { compareCapability: data, ...rest };
};
