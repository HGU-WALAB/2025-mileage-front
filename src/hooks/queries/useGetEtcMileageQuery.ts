import { getEtcMileageList } from '@/apis/mileage';
import { EtcMileageResponse } from '@/types/mileage';
import { useQuery } from '@tanstack/react-query';

const useGetEtcMileageQuery = () => {
  return useQuery<EtcMileageResponse[]>({
    queryKey: ['etcMileageList'],
    queryFn: () => getEtcMileageList(),
  });
};

export default useGetEtcMileageQuery;
