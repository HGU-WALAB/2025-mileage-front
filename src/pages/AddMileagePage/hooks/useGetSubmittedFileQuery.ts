import { QUERY_KEYS } from '@/constants/queryKeys';
import { useQuery } from '@tanstack/react-query';

import { getSubmittedMileageFile } from '../apis/addMileage';

export const useGetSubmittedFileQuery = (uniqueFileName: string) => {
  const { data, ...rest } = useQuery<Blob>({
    queryKey: [QUERY_KEYS.submittedMileage, uniqueFileName],
    queryFn: () => getSubmittedMileageFile({ uniqueFileName }),
  });

  return { file: data, ...rest };
};
