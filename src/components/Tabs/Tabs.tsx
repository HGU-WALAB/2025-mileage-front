import { TabItem } from '@/types/tab';
import { Tabs as MuiTabs, Tab, styled } from '@mui/material';

interface Props {
  selectedValue: TabItem;
  handleSelect: (newItem: TabItem) => void;
  tabList: TabItem[];
}

const StyledTabs = styled(MuiTabs)(({ theme }) => ({
  backgroundColor: theme.palette.white,
  borderBottom: `1px solid ${theme.palette.grey200}`,
  '& .MuiTabs-indicator': {
    backgroundColor: theme.palette.blue500,
    height: '3px',
    borderRadius: '1.5px',
  },
  '& .MuiTabs-flexContainer': {
    gap: '0',
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  color: theme.palette.grey500,
  fontWeight: 500,
  textTransform: 'none',
  fontSize: '1rem',
  minWidth: '120px',
  padding: '18px 24px',
  '&.Mui-selected': {
    color: theme.palette.blue500,
    fontWeight: 600,
  },
}));

const Tabs = ({ selectedValue, handleSelect, tabList }: Props) => {
  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    const selectedTab = tabList[newValue];
    handleSelect(selectedTab);
  };

  const currentIndex = tabList.findIndex(tab => tab.value === selectedValue.value);

  return (
    <StyledTabs value={currentIndex} onChange={handleChange}>
      {tabList.map(tab => (
        <StyledTab key={tab.value} label={tab.text} />
      ))}
    </StyledTabs>
  );
};

export default Tabs;
