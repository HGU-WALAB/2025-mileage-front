import { Tabs } from '@/components';
import { filterJoinedItems } from '@/constants/filterItems';
import { useFilteredByJoined } from '@/hooks';
import { TabItem } from '@/types/tab';

const JoinedTabs = () => {
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

export default JoinedTabs;
