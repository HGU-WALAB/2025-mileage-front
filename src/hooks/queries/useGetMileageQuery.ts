import { getMileageList } from '@/apis/mileage';
import { MileageRequest, MileageResponse } from '@/types/mileage';
import { useQuery } from '@tanstack/react-query';

const useGetMileageQuery = ({
  studentId,
  keyword,
  categoryName,
  semester,
  done,
}: MileageRequest) => {
  return useQuery<MileageResponse[]>({
    queryKey: ['mileageList', studentId, keyword, categoryName, semester, done],
    queryFn: () =>
      getMileageList({
        studentId,
        keyword,
        categoryName,
        semester,
        done,
      }),
  });
};

export default useGetMileageQuery;
