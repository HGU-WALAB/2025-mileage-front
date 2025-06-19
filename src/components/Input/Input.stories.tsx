/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  args: {
    label: '이름',
    placeholder: '이름을 입력하세요',
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

const ControlledInput = (args: any) => {
  const [value, setValue] = useState('');
  return (
    <Input {...args} value={value} onChange={e => setValue(e.target.value)} />
  );
};

export const Default: Story = {
  render: args => <ControlledInput {...args} />,
};

export const SmallSize: Story = {
  render: args => <ControlledInput {...args} />,
  args: {
    size: 'small',
  },
};

export const MediumSize: Story = {
  render: args => <ControlledInput {...args} />,
  args: {
    size: 'medium',
  },
};

export const OutlinedVariant: Story = {
  render: args => <ControlledInput {...args} />,
  args: {
    variant: 'outlined',
  },
};

export const FilledVariant: Story = {
  render: args => <ControlledInput {...args} />,
  args: {
    variant: 'filled',
  },
};

export const StandardVariant: Story = {
  render: args => <ControlledInput {...args} />,
  args: {
    variant: 'standard',
  },
};

export const FullWidth: Story = {
  render: args => <ControlledInput {...args} />,
  args: {
    fullWidth: true,
  },
};

export const WithError: Story = {
  render: args => <ControlledInput {...args} />,
  args: {
    error: true,
    helperText: '이 필드는 필수입니다.',
  },
};
