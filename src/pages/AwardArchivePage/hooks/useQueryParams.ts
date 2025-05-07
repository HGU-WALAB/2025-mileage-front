import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import { ALL } from '../constants/awardTypeLabels';
import { AwardFilterOption } from '../types/award';

export const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getQueryParams = useCallback((): AwardFilterOption => {
    const keyword = searchParams.get('keyword');
    const awardType = searchParams.get('awardType');
    const awardYear = searchParams.get('awardYear');

    return {
      keyword: keyword || '',
      awardType: awardType || ALL,
      awardYear: awardYear || ALL,
    };
  }, [searchParams]);

  const updateQueryParams = useCallback(
    (updates: Partial<AwardFilterOption>) => {
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
