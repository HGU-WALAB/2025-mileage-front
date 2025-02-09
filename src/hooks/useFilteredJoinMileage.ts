import useQueryParams from '@/hooks/useQueryParams';

const useFilteredJoinMileage = () => {
  const { queryParams, updateQueryParams } = useQueryParams();
  const selectedIsJoined = queryParams.done;

  const setSelectedIsJoin = (isJoined: string) => {
    if (isJoined === selectedIsJoined) {
      resetSelected();

      return;
    }

    updateQueryParams({ done: isJoined });
  };

  const resetSelected = () => {
    updateQueryParams({ done: 'all' });
  };

  return { selectedIsJoined, setSelectedIsJoin };
};

export default useFilteredJoinMileage;
