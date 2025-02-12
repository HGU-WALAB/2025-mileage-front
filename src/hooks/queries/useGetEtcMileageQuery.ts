import { getEtcMileageList } from '@/apis/mileage';
import { EtcMileageResponse } from '@/types/mileage';
import { useQuery } from '@tanstack/react-query';

const useGetEtcMileageQuery = ({ semester }: { semester: string }) => {
  return useQuery<EtcMileageResponse[]>({
    queryKey: ['etcMileageList', semester],
    queryFn: () =>
      getEtcMileageList({
        semester,
      }),
  });
};

export default useGetEtcMileageQuery;
