import { LogoIcon } from '@/assets';
import { Button, Heading, Modal } from '@/components';
import { useOpenModal } from '@/hooks';
import { styled, useTheme } from '@mui/material';
import { useEffect } from 'react';

const ApplySucceedModal = ({ isSucceed }: { isSucceed: boolean }) => {
  const theme = useTheme();
  const { open, toggleModal } = useOpenModal(isSucceed);

  useEffect(() => {
    if (isSucceed) {
      toggleModal();
    }
  }, [isSucceed]);

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
        style={{ margin: '3rem auto', gap: '2rem' }}
      >
        <LogoIcon width="100px" height="100px" />
        <Heading as="h2" style={{ fontSize: '2rem' }}>
          마일리지 장학금 신청이 완료되었습니다
        </Heading>
        <S.CloseButton label="확인" size="large" />
      </Modal.Body>
    </Modal>
  );
};

export default ApplySucceedModal;

const S = {
  CloseButton: styled(Button)`
    width: 300px;
    ${({ theme }) => theme.typography.h3}
  `,
};
