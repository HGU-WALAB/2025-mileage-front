import { QUERY_KEYS } from '@/constants/queryKeys';
import { useSuspenseQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { getSemesterCapability } from '../apis/capability';
import { SemesterCapabilityResponse } from '../types/capability';

export const useGetSemesterCapabilityQuery = () => {
  return useSuspenseQuery<SemesterCapabilityResponse[], AxiosError>({
    queryKey: [QUERY_KEYS.semesterCapability],
    queryFn: () => getSemesterCapability(),
  });
};
