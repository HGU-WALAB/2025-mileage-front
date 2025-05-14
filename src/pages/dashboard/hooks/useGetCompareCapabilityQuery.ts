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
  studentType,
}: CompareCapabilityRequest) => {
  const { data, ...rest } = useSuspenseQuery<
    CompareCapabilityResponse[],
    AxiosError
  >({
    queryKey: [QUERY_KEYS.compareCapability, term, entryYear, studentType],
    queryFn: () => getCompareCapability({ term, entryYear, studentType }),
  });

  return { compareCapability: data, ...rest };
};
