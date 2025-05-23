import { TabItem } from '@/types/tab';

import { filterJoinedItems } from '../constants/filterItems';
import { useQueryParams } from '../hooks/useQueryParams';

export const useFilteredByJoined = () => {
  const { queryParams, updateQueryParams } = useQueryParams();
  const selectedValue = queryParams.done ?? 'all';

  const selectedJoined =
    filterJoinedItems.find(item => item.value === selectedValue) ||
    filterJoinedItems[0];

  const setSelectedJoined = (isJoined: TabItem) => {
    if (isJoined === selectedJoined) {
      resetSelected();

      return;
    }

    updateQueryParams({ done: isJoined.value });
  };

  const resetSelected = () => {
    updateQueryParams({ done: 'all' });
  };

  return { selectedJoined, setSelectedJoined };
};
