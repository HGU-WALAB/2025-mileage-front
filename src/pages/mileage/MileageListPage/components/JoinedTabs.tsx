import { Tabs } from '@/components';
import { TabItem } from '@/types/tab';

import { filterJoinedItems } from '../../constants/filterItems';
import { useFilteredByJoined } from '../../hooks/useFilteredByJoined';

export const JoinedTabs = () => {
  const { selectedJoined, setSelectedJoined } = useFilteredByJoined();

  const handleChange = (newItem: TabItem) => {
    setSelectedJoined(newItem);
  };

  return (
    <Tabs
      selectedValue={selectedJoined}
      handleSelect={handleChange}
      tabList={filterJoinedItems}
    />
  );
};
