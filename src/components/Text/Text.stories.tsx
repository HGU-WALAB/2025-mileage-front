import type { Meta, StoryObj } from '@storybook/react';
import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  args: {
    children: '기본 텍스트입니다',
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {};

export const Bold: Story = {
  args: {
    bold: true,
    children: '굵은 텍스트입니다',
  },
};

export const Colored: Story = {
  args: {
    color: '#1976d2',
    children: '파란 텍스트입니다',
  },
};

export const WithPaddingAndMargin: Story = {
  args: {
    padding: '1rem',
    margin: '1rem 0',
    children: '여백이 있는 텍스트입니다',
  },
};

export const HeadingTag: Story = {
  args: {
    as: 'p',
    children: 'p 태그로 렌더링된 텍스트입니다',
  },
};
