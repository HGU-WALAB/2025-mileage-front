import type { Meta, StoryObj } from '@storybook/react';
import Heading from './Heading';

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: '타이틀 텍스트',
  },
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {};

export const H1: Story = {
  args: {
    as: 'h1',
    children: 'H1 스타일',
  },
};

export const H2: Story = {
  args: {
    as: 'h2',
    children: 'H2 스타일',
  },
};

export const CustomColor: Story = {
  args: {
    as: 'h3',
    color: '#ff4d4f',
    children: '빨간 헤딩',
  },
};

export const WithPaddingAndMargin: Story = {
  args: {
    as: 'h2',
    children: '패딩과 마진이 있는 헤딩',
    padding: '1rem',
    margin: '1rem 0',
  },
};
