import { DeleteIcon, LogoIcon } from '@/assets';
import { Button, Flex, Heading, Modal, Text } from '@/components';
import { useOpenModal } from '@/hooks';
import { useDeleteSubmittedMileageMutation } from '@/hooks/queries';
import { trackSubmittedMileageModalDeleteButton } from '@/service/amplitude/trackEvent';
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

  const { mutate: deleteMileage, isSuccess } =
    useDeleteSubmittedMileageMutation();

  const handleClickDelete = () => {
    deleteMileage({
      studentId: student.studentId,
      recordId: item.recordId,
    });

    if (isSuccess) toggleModal();
  };

  return (
    <Modal
      open={open}
      toggleModal={toggleModal}
      trigger={
        <S.IconButton onClick={() => trackSubmittedMileageModalDeleteButton()}>
          <DeleteIcon />
        </S.IconButton>
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
        <Flex.Column align="center">
          <Heading as="h2">정말 이 항목을 삭제하시겠습니까?</Heading>
          <Heading as="h3">삭제된 항목은 다시 복구할 수 없습니다.</Heading>
        </Flex.Column>
        <Flex.Column>
          <Heading as="h3">제출된 마일리지 정보</Heading>
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
  IconButton: styled('button')`
    align-items: center;
    background-color: ${({ theme }) => theme.palette.grey100};
    border: 2px solid ${({ theme }) => theme.palette.grey200};
    border-radius: 0.5rem;
    display: flex;
    height: 30px;
    justify-content: center;
    width: 30px;
  `,
  SubmitButton: styled(Button)`
    width: 150px;
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
