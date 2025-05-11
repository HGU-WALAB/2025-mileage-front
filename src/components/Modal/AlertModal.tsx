import { LogoIcon } from '@/assets';
import { Button, Heading, Modal } from '@/components';
import { useOpenModal } from '@/hooks';
import { styled, useTheme } from '@mui/material';
import { useEffect } from 'react';

interface Props {
  alertOpen: boolean;
  alertMessage: string;
}

const AlertModal = ({ alertOpen, alertMessage }: Props) => {
  const theme = useTheme();
  const { open, toggleModal } = useOpenModal(alertOpen);

  useEffect(() => {
    if (alertOpen) {
      toggleModal();
    }
  }, [alertOpen]);

  return (
    <Modal
      open={open}
      toggleModal={toggleModal}
      size="medium"
      hasCloseButton
      style={{
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Modal.Body
        position="center"
        style={{
          margin: '2rem auto',
          gap: '2rem',
        }}
      >
        <LogoIcon width="100px" height="100px" />
        <Heading
          as="h2"
          style={{
            overflowWrap: 'normal',
            wordBreak: 'keep-all',
            textAlign: 'center',
          }}
        >
          {alertMessage}
        </Heading>
        <S.CloseButton label="확인" size="large" onClick={toggleModal} />
      </Modal.Body>
    </Modal>
  );
};

export default AlertModal;

const S = {
  CloseButton: styled(Button)`
    width: 300px;
    ${({ theme }) => theme.typography.h3}
  `,
};
