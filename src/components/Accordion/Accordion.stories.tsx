import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  decorators: [Story => <Story />],
  args: {
    title: '아코디언 제목',
    desc: '아코디언이 펼쳐졌을 때 보이는 상세 내용입니다.',
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {};
