import { MileageRequest } from '@/types/mileage';
import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getQueryParams = useCallback((): MileageRequest => {
    const studentId = searchParams.get('studentId');
    const searchExample = searchParams.get('searchExample');
    const categoryName = searchParams.get('categoryName');
    const semester = searchParams.get('semester');
    const done = searchParams.get('done');

    return {
      studentId: Number(studentId) || 0,
      searchExample: searchExample || '',
      categoryName: categoryName || '',
      semester: semester || '',
      done: done || '',
    };
  }, [searchParams]);

  const updateQueryParams = useCallback(
    (updates: Partial<MileageRequest>) => {
      const current = getQueryParams();
      const newParams = { ...current, ...updates };

      const cleanParams = new URLSearchParams();

      if (newParams.studentId) {
        cleanParams.append('studentId', newParams.studentId.toString());
      }

      if (newParams.searchExample) {
        cleanParams.append('searchExample', newParams.searchExample);
      }

      if (newParams.categoryName) {
        cleanParams.append('categoryName', newParams.categoryName);
      }

      if (newParams.semester) {
        cleanParams.append('semester', newParams.semester);
      }

      if (newParams.done) {
        cleanParams.append('done', newParams.done);
      }

      setSearchParams(cleanParams);
    },
    [setSearchParams, getQueryParams],
  );

  return { queryParams: getQueryParams(), updateQueryParams };
};

export default useQueryParams;
