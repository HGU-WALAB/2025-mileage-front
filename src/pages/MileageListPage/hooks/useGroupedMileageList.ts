import { MileageResponse } from '../types/mileage';
import { useGetMileageQuery } from './useGetMileageQuery';
import { useQueryParams } from './useQueryParams';

export const useGroupedMileageList = () => {
  const { queryParams } = useQueryParams();

  const { data: mileageList, isLoading } = useGetMileageQuery({
    keyword: queryParams.keyword,
    category: queryParams.category || undefined,
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

  return { groupedMileageList, isLoading };
};
