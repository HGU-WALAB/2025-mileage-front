import { getEtcMileageList } from '@/apis/mileage';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { EtcMileageResponse } from '@/types/mileage';
import { useQuery } from '@tanstack/react-query';

const useGetEtcMileageQuery = () => {
  return useQuery<EtcMileageResponse[]>({
    queryKey: [QUERY_KEYS.etcMileageList],
    queryFn: () => getEtcMileageList(),
    throwOnError: true,
  });
};

export default useGetEtcMileageQuery;
