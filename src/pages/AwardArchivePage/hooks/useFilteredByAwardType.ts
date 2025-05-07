import { TabItem } from '@/types/tab';

import { ALL, awardTypeLabels } from '../constants/awardTypeLabels';
import { useQueryParams } from '../hooks/useQueryParams';

export const useFilteredByAwardType = () => {
  const { queryParams, updateQueryParams } = useQueryParams();
  const selectedValue = queryParams.awardType ?? ALL;

  const selectedAwardType =
    awardTypeLabels.find(item => item.value === selectedValue) ||
    awardTypeLabels[0];

  const setSelectedAwardType = (awardType: TabItem) => {
    if (awardType === selectedAwardType) {
      resetSelected();

      return;
    }

    updateQueryParams({ awardType: awardType.value });
  };

  const resetSelected = () => {
    updateQueryParams({ awardType: 'all' });
  };

  return { selectedAwardType, setSelectedAwardType };
};
