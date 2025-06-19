import { Button } from '@/components';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import AlertModal from './AlertModal';

const meta: Meta<typeof AlertModal> = {
  title: 'Components/AlertModal',
  component: AlertModal,
  args: {
    alertMessage: '정말 삭제하시겠습니까?',
  },
};

export default meta;

type Story = StoryObj<typeof AlertModal>;

const AlertModalTemplate = (args: { alertMessage: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button label="모달 열기" onClick={() => setOpen(true)} />
      <AlertModal alertOpen={open} alertMessage={args.alertMessage} />
    </>
  );
};

export const Default: Story = {
  render: args => <AlertModalTemplate {...args} />,
};

export const CustomMessage: Story = {
  render: args => <AlertModalTemplate {...args} />,
  args: {
    alertMessage: '현재 작업이 저장되지 않을 수 있습니다. 계속하시겠습니까?',
  },
};
