import { getMileageList } from '@/apis/mileage';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { MileageRequest, MileageResponse } from '@/types/mileage';
import { useQuery } from '@tanstack/react-query';

const useGetMileageQuery = ({
  studentId,
  keyword,
  category,
  semester,
  done,
}: MileageRequest) => {
  return useQuery<MileageResponse[]>({
    queryKey: [
      QUERY_KEYS.mileageList,
      studentId,
      keyword,
      category,
      semester,
      done,
    ],
    queryFn: () =>
      getMileageList({
        studentId,
        keyword,
        category,
        semester,
        done,
      }),
    throwOnError: true,
  });
};

export default useGetMileageQuery;
