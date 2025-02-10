import useQueryParams from '@/hooks/useQueryParams';

const useFilteredJoined = () => {
  const { queryParams, updateQueryParams } = useQueryParams();
  const selectedJoined = queryParams.done;

  const setSelectedJoined = (isJoined: string) => {
    if (isJoined === selectedJoined) {
      resetSelected();

      return;
    }

    updateQueryParams({ done: isJoined });
  };

  const resetSelected = () => {
    updateQueryParams({ done: 'all' });
  };

  return { selectedJoined, setSelectedJoined };
};

export default useFilteredJoined;
