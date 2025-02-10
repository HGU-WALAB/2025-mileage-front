import { useGetMileageQuery } from '@/hooks/queries';
import useQueryParams from '@/hooks/useQueryParams';
import { MileageResponse } from '@/types/mileage';

const useGroupedMileageList = () => {
  const { queryParams } = useQueryParams();

  const { data: mileageList } = useGetMileageQuery({
    studentId: queryParams.studentId,
    keyword: queryParams.keyword,
    categoryName: queryParams.categoryName,
    semester: queryParams.semester,
    done: queryParams.done,
  });

  const groupByCategoryId = (mileageList: MileageResponse[]) => {
    return Object.values(
      mileageList.reduce(
        (acc, mileage) => {
          if (!acc[mileage.categoryId]) {
            acc[mileage.categoryId] = {
              categoryId: mileage.categoryId,
              categoryName: mileage.categoryName,
              items: [],
            };
          }
          acc[mileage.categoryId].items.push(mileage);

          return acc;
        },
        {} as Record<
          number,
          { categoryId: number; categoryName: string; items: MileageResponse[] }
        >,
      ),
    );
  };

  const groupedMileageList = groupByCategoryId(mileageList || []);

  return groupedMileageList;
};

export default useGroupedMileageList;
