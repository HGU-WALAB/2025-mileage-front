import { useQueryParams } from '@/hooks';
import { useGetMileageQuery } from '@/hooks/queries';
import { useAuthStore } from '@/stores';
import { MileageResponse } from '@/types/mileage';

const useGroupedMileageList = () => {
  const { student } = useAuthStore();
  const { queryParams } = useQueryParams();

  const { data: mileageList, isLoading } = useGetMileageQuery({
    studentId: student.studentId,
    keyword: queryParams.keyword,
    category: queryParams.category || undefined,
    semester: queryParams.semester,
    done: queryParams.done,
  });

  // TODO: 모든 카테고리 픽스 이후 카테고리 순서 픽스 필요
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

  return { groupedMileageList, isLoading };
};

export default useGroupedMileageList;
