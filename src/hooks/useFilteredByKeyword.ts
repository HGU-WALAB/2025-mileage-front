import useQueryParams from '@/hooks/useQueryParams';

const useFilteredByKeyword = () => {
  const { queryParams, updateQueryParams } = useQueryParams();
  const keyword = queryParams.keyword;

  const setKeyword = (newKeyword: string) => {
    updateQueryParams({ keyword: newKeyword });
  };

  return { keyword, setKeyword };
};

export default useFilteredByKeyword;
