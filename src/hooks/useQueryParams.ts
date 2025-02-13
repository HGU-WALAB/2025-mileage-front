import { MileageRequest } from '@/types/mileage';
import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getQueryParams = useCallback((): MileageRequest => {
    const studentId = searchParams.get('studentId');
    const keyword = searchParams.get('keyword');
    const category = searchParams.get('category');
    const semester = searchParams.get('semester');
    const done = searchParams.get('done');

    return {
      studentId: Number(studentId) || 0,
      keyword: keyword || '',
      category: category || '',
      semester: semester || '',
      done: done || '',
    };
  }, [searchParams]);

  const updateQueryParams = useCallback(
    (updates: Partial<MileageRequest>) => {
      const current = getQueryParams();
      const newParams = { ...current, ...updates };

      const cleanParams = new URLSearchParams();

      Object.entries(newParams).forEach(([key, value]) => {
        if (value) {
          cleanParams.set(key, value.toString());
        } else {
          cleanParams.delete(key);
        }
      });

      setSearchParams(cleanParams);
    },
    [setSearchParams, getQueryParams],
  );

  return { queryParams: getQueryParams(), updateQueryParams };
};

export default useQueryParams;
