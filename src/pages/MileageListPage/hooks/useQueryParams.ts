import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import { ALL_SEMESTER } from '../constants/system';
import { MileageRequest } from '../types/mileage';

export const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getQueryParams = useCallback((): Omit<MileageRequest, 'studentId'> => {
    const keyword = searchParams.get('keyword');
    const category = searchParams.get('category');
    const semester = searchParams.get('semester');
    const done = searchParams.get('done');

    return {
      keyword: keyword || '',
      category: category || '',
      semester: semester || ALL_SEMESTER,
      done: done || 'all',
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
