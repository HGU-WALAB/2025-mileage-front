import useQueryParams from '@/hooks/useQueryParams';

const useFilteredBySearchKeyword = () => {
  const { queryParams, updateQueryParams } = useQueryParams();
  const searchKeyword = queryParams.searchKeyword;

  const setSearchKeyword = (newSearchKeyword: string) => {
    updateQueryParams({ searchKeyword: newSearchKeyword });
  };

  return { searchKeyword, setSearchKeyword };
};

export default useFilteredBySearchKeyword;
