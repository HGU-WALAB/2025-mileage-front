import type { TabItem } from '@/types/tab';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Tabs from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
};

export default meta;

type Story = StoryObj<typeof Tabs>;

const tabList: TabItem[] = [
  { value: 'all', text: '전체' },
  { value: 'completed', text: '수료' },
  { value: 'uncompleted', text: '미수료' },
];

const TabsTemplate = () => {
  const [selected, setSelected] = useState<TabItem>(tabList[0]);

  return (
    <Tabs
      tabList={tabList}
      selectedValue={selected}
      handleSelect={setSelected}
    />
  );
};

export const Default: Story = {
  render: () => <TabsTemplate />,
};
