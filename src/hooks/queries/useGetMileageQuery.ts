import { getMileageList } from '@/apis/mileage';
import { MileageRequest, MileageResponse } from '@/types/mileage';
import { useQuery } from '@tanstack/react-query';

const useGetMileageQuery = ({
  studentId,
  searchKeyword,
  categoryName,
  semester,
  done,
}: MileageRequest) => {
  return useQuery<MileageResponse[]>({
    queryKey: [
      'mileageList',
      studentId,
      searchKeyword,
      categoryName,
      semester,
      done,
    ],
    queryFn: () =>
      getMileageList({
        studentId,
        searchKeyword,
        categoryName,
        semester,
        done,
      }),
  });
};

export default useGetMileageQuery;
