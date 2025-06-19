import { Flex } from '@/components';
import type { Meta, StoryObj } from '@storybook/react';
import { ToggleButton } from './ToggleButton';

const meta: Meta<typeof ToggleButton> = {
  title: 'Components/ToggleButton',
  component: ToggleButton,
  args: {
    label: '선택',
    variant: 'outlined',
    size: 'small',
    color: 'blue',
  },
};

export default meta;

type Story = StoryObj<typeof ToggleButton>;

export const Default: Story = {};

export const Selected: Story = {
  args: {
    selected: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <Flex.Row gap="1rem">
      <ToggleButton label="Small" size="small" />
      <ToggleButton label="Medium" size="medium" />
      <ToggleButton label="Large" size="large" />
    </Flex.Row>
  ),
};

export const Variants: Story = {
  render: () => (
    <Flex.Row gap="1rem">
      <ToggleButton label="Outlined" variant="outlined" />
      <ToggleButton label="Contained" variant="contained" />
    </Flex.Row>
  ),
};

export const Rounded: Story = {
  render: () => (
    <Flex.Row gap="1rem">
      <ToggleButton label="라운드 O" isRound />
      <ToggleButton label="라운드 X" />
    </Flex.Row>
  ),
};
