import { useGetMileageQuery } from '@/hooks/queries';
import useQueryParams from '@/hooks/useQueryParams';

const useFilteredSemester = () => {
  const { queryParams, updateQueryParams } = useQueryParams();
  const selectedSemester = queryParams.semester;

  const { data: mileageList } = useGetMileageQuery({
    studentId: queryParams.studentId,
    searchExample: queryParams.searchExample,
    categoryName: queryParams.categoryName,
    semester: queryParams.semester,
    done: queryParams.done,
  });

  const semesterList = [
    '전체',
    ...Array.from(new Set(mileageList?.map(item => item.semester))).sort(
      (a, b) => b.localeCompare(a),
    ),
  ];

  const setSelectedSemester = (newSemester: string) => {
    updateQueryParams({ semester: newSemester });
  };

  return { semesterList, selectedSemester, setSelectedSemester };
};

export default useFilteredSemester;
