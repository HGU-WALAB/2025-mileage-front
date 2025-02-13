import { useQueryParams } from '@/hooks';
import { useGetMileageQuery } from '@/hooks/queries';
import { MileageResponse } from '@/types/mileage';

const useGroupedMileageList = () => {
  const { queryParams } = useQueryParams();

  const { data: mileageList } = useGetMileageQuery({
    studentId: queryParams.studentId,
    keyword: queryParams.keyword,
    category: queryParams.category,
    semester: queryParams.semester,
    done: queryParams.done,
  });

  // TODO: 모든 카테고리 픽스 이후 카테고리 순서 픽스 필요 ((필터링 이후 카테고리 없어지지 않게 작업 필요))
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
