import { useQueryParams } from '@/hooks';
import { useGetMileageQuery } from '@/hooks/queries';

const useFilteredBySemester = () => {
  const { queryParams, updateQueryParams } = useQueryParams();
  const selectedSemester = queryParams.semester;

  const { data: mileageList } = useGetMileageQuery({
    studentId: queryParams.studentId,
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

export default useFilteredBySemester;
