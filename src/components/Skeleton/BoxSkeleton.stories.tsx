import type { Meta, StoryObj } from '@storybook/react';
import BoxSkeleton from './BoxSkeleton';

const meta: Meta<typeof BoxSkeleton> = {
  title: 'Components/Loading/Skeleton/SkeletonBoxSkeleton',
  component: BoxSkeleton,
  args: {
    height: 200,
  },
};

export default meta;

type Story = StoryObj<typeof BoxSkeleton>;

export const Default: Story = {};

export const Short: Story = {
  args: {
    height: 100,
  },
};

export const Tall: Story = {
  args: {
    height: 400,
  },
};
