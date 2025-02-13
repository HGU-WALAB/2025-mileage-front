import { useQueryParams } from '@/hooks';

const useFilteredByJoined = () => {
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

export default useFilteredByJoined;
