import type { THeader } from '@/types/table';
import type { Meta, StoryObj } from '@storybook/react';
import Table from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
};

export default meta;

type Story = StoryObj<typeof Table>;

const headItems: THeader[] = [
  { text: '이름', value: 'name', align: 'left' },
  { text: '나이', value: 'age', align: 'center' },
  { text: '이메일', value: 'email', align: 'left', width: '40%' },
];

const bodyItems = [
  { name: '홍길동', age: 28, email: 'hong@example.com' },
  { name: '김영희', age: 32, email: 'kim@example.com' },
  { name: '이철수', age: 45, email: 'lee@example.com' },
];

export const Default: Story = {
  render: () => <Table headItems={headItems} bodyItems={bodyItems} />,
};
