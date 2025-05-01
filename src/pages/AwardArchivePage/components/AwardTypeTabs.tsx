import { Tabs } from '@/components';
import { TabItem } from '@/types/tab';

import { awardTypeLabels } from '../constants/awardTypeLabels';
import { useFilteredByAwardType } from '../hooks/useFilteredByAwardType';

export const AwardTypeTabs = () => {
  const { selectedAwardType, setSelectedAwardType } = useFilteredByAwardType();

  const handleChange = (newItem: TabItem) => {
    setSelectedAwardType(newItem);
  };

  return (
    <Tabs
      selectedValue={selectedAwardType}
      handleSelect={handleChange}
      tabList={awardTypeLabels}
    />
  );
};
