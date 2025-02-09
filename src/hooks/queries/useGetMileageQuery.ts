import { getMileageList } from '@/apis/mileage';
import { MileageRequest, MileageResponse } from '@/types/mileage';
import { useQuery } from '@tanstack/react-query';

const useGetMileageQuery = ({
  studentId,
  searchExample,
  categoryName,
  semester,
  done,
}: MileageRequest) => {
  return useQuery<MileageResponse[]>({
    queryKey: [
      'mileageList',
      studentId,
      searchExample,
      categoryName,
      semester,
      done,
    ],
    queryFn: () =>
      getMileageList({
        studentId,
        searchExample,
        categoryName,
        semester,
        done,
      }),
  });
};

export default useGetMileageQuery;
