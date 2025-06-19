import { Button, Heading } from '@/components';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Modal, { Props } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  args: {
    size: 'medium',
    hasCloseButton: true,
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

const ModalTemplate = (args: Omit<Props, 'open' | 'toggleModal'>) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button label="모달 열기" onClick={() => setOpen(true)} />
      <Modal open={open} toggleModal={() => setOpen(false)} {...args}>
        <Modal.Body
          position="center"
          style={{ gap: '1.5rem', padding: '2rem' }}
        >
          <Heading as="h2" style={{ textAlign: 'center' }}>
            모달 타이틀
          </Heading>
          <p style={{ textAlign: 'center' }}>
            이곳은 모달의 본문 내용입니다. 스토리북에서도 쉽게 확인할 수 있어요.
          </p>
          <Button label="닫기" onClick={() => setOpen(false)} size="large" />
        </Modal.Body>
      </Modal>
    </>
  );
};

export const Default: Story = {
  render: args => <ModalTemplate {...args} />,
};

export const LargeSize: Story = {
  render: args => <ModalTemplate {...args} />,
  args: {
    size: 'large',
  },
};

export const NoCloseButton: Story = {
  render: args => <ModalTemplate {...args} />,
  args: {
    hasCloseButton: false,
  },
};
