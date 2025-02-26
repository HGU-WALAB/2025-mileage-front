import { useQueryParams } from '@/hooks';
import { useGetMileageQuery } from '@/hooks/queries';
import { useAuthStore } from '@/stores';

const useFilteredBySemester = () => {
  const { student } = useAuthStore();
  const { queryParams, updateQueryParams } = useQueryParams();
  const selectedSemester = queryParams.semester;

  const { data: mileageList, isLoading } = useGetMileageQuery({
    studentId: student.studentId,
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

  return { semesterList, isLoading, selectedSemester, setSelectedSemester };
};

export default useFilteredBySemester;
