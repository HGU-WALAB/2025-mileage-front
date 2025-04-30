import { getSemesterCapability } from '@/apis/capability';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { SemesterCapabilityResponse } from '@/types/capability';
import { useSuspenseQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

const useGetSemesterCapabilityQuery = () => {
  return useSuspenseQuery<SemesterCapabilityResponse[], AxiosError>({
    queryKey: [QUERY_KEYS.semesterCapability],
    queryFn: () => getSemesterCapability(),
  });
};

export default useGetSemesterCapabilityQuery;
