import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  decorators: [
    Story => (
      <div style={{ maxWidth: 800, margin: '2rem auto' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {};
