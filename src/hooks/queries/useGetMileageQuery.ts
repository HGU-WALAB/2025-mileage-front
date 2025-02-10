import { getMileageList } from '@/apis/mileage';
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
    queryKey: ['mileageList', studentId, keyword, category, semester, done],
    queryFn: () =>
      getMileageList({
        studentId,
        keyword,
        category,
        semester,
        done,
      }),
  });
};

export default useGetMileageQuery;
