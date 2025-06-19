import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { BackButton } from './BackButton';

const meta: Meta<typeof BackButton> = {
  title: 'Components/BackButton',
  component: BackButton,
  decorators: [
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  args: {
    label: '뒤로가기',
  },
};

export default meta;

type Story = StoryObj<typeof BackButton>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const CustomLabel: Story = {
  args: {
    label: '이전 화면으로',
  },
};

export const WithToProp: Story = {
  args: {
    to: '/home',
  },
};
