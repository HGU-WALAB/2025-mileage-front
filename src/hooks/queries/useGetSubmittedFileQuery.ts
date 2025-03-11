import { getSubmittedMileageFile } from '@/apis/mileage';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { useQuery } from '@tanstack/react-query';

const useGetSubmittedFileQuery = (uniqueFileName: string) => {
  return useQuery<Blob>({
    queryKey: [QUERY_KEYS.submittedMileage, uniqueFileName],
    queryFn: () => getSubmittedMileageFile({ uniqueFileName }),
  });
};

export default useGetSubmittedFileQuery;
