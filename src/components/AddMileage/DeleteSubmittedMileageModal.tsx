import { LogoIcon } from '@/assets';
import { Button, Flex, Modal, Text } from '@/components';
import { useOpenModal } from '@/hooks';
import { useDeleteSubmittedMileageMutation } from '@/hooks/queries';
import { useAuthStore } from '@/stores';
import { SubmittedMileageResponse } from '@/types/mileage';
import { styled, useTheme } from '@mui/material';

interface Props {
  item: SubmittedMileageResponse;
}

const DeleteSubmittedMileageModal = ({ item }: Props) => {
  const theme = useTheme();
  const { student } = useAuthStore();
  const { open, toggleModal } = useOpenModal();

  const { mutate: deleteMileage } = useDeleteSubmittedMileageMutation();

  const handleClickDelete = () => {
    deleteMileage({
      studentId: student.studentId,
      recordId: item.recordId,
    });
  };

  return (
    <Modal
      open={open}
      toggleModal={toggleModal}
      trigger={
        <Button label="삭제하기" style={{ width: '100px' }} color="pink" />
      }
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
        <Flex.Column>
          <Text>항목 : {item.subitemName}</Text>
          <Text>등록 상세 정보 : {item.description1}</Text>
        </Flex.Column>
        <Flex.Row justify="center" gap="2rem" margin="2rem 0 0">
          <S.CloseButton label="취소하기" size="large" onClick={toggleModal} />
          <S.SubmitButton
            label="삭제하기"
            size="large"
            onClick={handleClickDelete}
          />
        </Flex.Row>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteSubmittedMileageModal;

const S = {
  SubmitButton: styled(Button)`
    width: 150px;
    ${({ theme }) => theme.typography.h3}
  `,
  CloseButton: styled(Button)`
    background-color: ${({ theme }) => theme.palette.grey300};
    width: 150px;

    &:hover,
    &:active {
      background-color: ${({ theme }) => theme.palette.grey400};
    }
  `,
};
