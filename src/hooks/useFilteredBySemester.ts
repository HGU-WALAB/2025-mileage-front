import { ALL_SEMESTER } from '@/constants/system';
import { useQueryParams } from '@/hooks';
import { useGetMileageQuery } from '@/hooks/queries';
import { useAuthStore } from '@/stores';
import { useMemo } from 'react';

const useFilteredBySemester = () => {
  const { student } = useAuthStore();
  const { queryParams, updateQueryParams } = useQueryParams();
  const selectedSemester = queryParams.semester;

  const { data: mileageList, isLoading } = useGetMileageQuery({
    studentId: student.studentId,
  });

  const semesterList = useMemo(
    () => [
      ALL_SEMESTER,
      ...Array.from(new Set(mileageList?.map(item => item.semester))).sort(
        (a, b) => b.localeCompare(a),
      ),
    ],
    [mileageList],
  );

  const setSelectedSemester = (newSemester: string) => {
    updateQueryParams({ semester: newSemester });
  };

  return { semesterList, isLoading, selectedSemester, setSelectedSemester };
};

export default useFilteredBySemester;
