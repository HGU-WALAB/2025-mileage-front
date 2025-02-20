import { TabItem } from '@/types/tab';
import { Tabs as MuiTabs, Tab } from '@mui/material';

interface Props {
  selectedValue: TabItem;
  handleSelect: (newItem: TabItem) => void;
  tabList: TabItem[];
}

const Tabs = ({ selectedValue, handleSelect, tabList }: Props) => {
  const handleChange = (_: React.SyntheticEvent, newItem: TabItem) => {
    handleSelect(newItem);
  };

  return (
    <MuiTabs value={selectedValue} onChange={handleChange}>
      {tabList.map(tab => (
        <Tab key={tab.value} label={tab.text} value={tab} />
      ))}
    </MuiTabs>
  );
};

export default Tabs;
