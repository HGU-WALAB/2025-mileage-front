import type { Meta, StoryObj } from '@storybook/react';
import Title from './Title';

const meta: Meta<typeof Title> = {
  title: 'Components/Title',
  component: Title,
  args: {
    label: '섹션 타이틀',
  },
};

export default meta;

type Story = StoryObj<typeof Title>;

export const Default: Story = {};
