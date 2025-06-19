import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Dropdown, { Props } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  decorators: [Story => <Story />],
  args: {
    label: '옵션 선택',
    items: ['Option 1', 'Option 2', 'Option 3'],
    size: 'small',
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

const TemplateComponent = (args: Props) => {
  const [selectedItem, setSelectedItem] = useState(args.items[0] ?? '');

  return (
    <Dropdown
      {...args}
      selectedItem={selectedItem}
      setSelectedItem={setSelectedItem}
    />
  );
};

export const Default: Story = {
  render: args => <TemplateComponent {...args} />,
};

export const MediumSize: Story = {
  render: args => <TemplateComponent {...args} />,
  args: {
    size: 'medium',
  },
};

export const Disabled: Story = {
  render: args => <TemplateComponent {...args} />,
  args: {
    disabled: true,
  },
};

export const CustomWidth: Story = {
  render: args => <TemplateComponent {...args} />,
  args: {
    width: '300px',
  },
};

export const WithoutLabel: Story = {
  render: args => <TemplateComponent {...args} />,
  args: {
    label: undefined,
  },
};
