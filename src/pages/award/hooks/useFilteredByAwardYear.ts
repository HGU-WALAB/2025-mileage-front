import { useMemo } from 'react';

import { ALL } from '../constants/awardTypeLabels';
import { useGetAwardsQuery } from '../hooks/useGetAwardsQuery';
import { useQueryParams } from '../hooks/useQueryParams';

export const useFilteredByAwardYear = () => {
  const { queryParams, updateQueryParams } = useQueryParams();
  const selectedYear = queryParams.awardYear;

  const { awards } = useGetAwardsQuery();

  const yearList = useMemo(
    () => [
      ALL,
      ...Array.from(new Set(awards?.map(item => item.awardYear))).sort((a, b) =>
        b.localeCompare(a),
      ),
    ],
    [awards],
  );

  const setSelectedNewYear = (newYear: string) => {
    updateQueryParams({ awardYear: newYear });
  };

  return { yearList, selectedYear, setSelectedNewYear };
};
