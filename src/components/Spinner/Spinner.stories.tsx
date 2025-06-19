import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Loading/Spinner',
  component: Spinner,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  render: () => (
    <div style={{ height: '100vh', position: 'relative' }}>
      <Spinner />
    </div>
  ),
};
