import type { Meta, StoryObj } from '@storybook/react';
import TableListSkeleton from './TableListSkeleton';

const meta: Meta<typeof TableListSkeleton> = {
  title: 'Components/Loading/Skeleton/TableListSkeleton',
  component: TableListSkeleton,
};

export default meta;

type Story = StoryObj<typeof TableListSkeleton>;

export const Default: Story = {};
