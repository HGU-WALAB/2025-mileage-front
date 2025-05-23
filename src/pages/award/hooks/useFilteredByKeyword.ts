import { debounce } from '@/utils/debounce';
import { useCallback } from 'react';

import { useQueryParams } from '../hooks/useQueryParams';

export const useFilteredByKeyword = () => {
  const { queryParams, updateQueryParams } = useQueryParams();
  const keyword = queryParams.keyword;

  const setKeyword = useCallback(
    debounce((newKeyword: string) => {
      updateQueryParams({ keyword: newKeyword });
    }, 300),
    [],
  );
  return { keyword, setKeyword };
};
