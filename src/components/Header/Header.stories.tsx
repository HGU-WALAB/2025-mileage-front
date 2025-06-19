import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => (
    <MemoryRouter initialEntries={['/dashboard']}>
      <Routes>
        <Route path="*" element={<Header />} />
      </Routes>
    </MemoryRouter>
  ),
};
