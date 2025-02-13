import {
  Button,
  Dropdown,
  Flex,
  FormField,
  Heading,
  Modal,
  UploadButton,
} from '@/components';
import { useNewMileageForm, useOpenModal } from '@/hooks';
import { styled } from '@mui/material';

const AddMileageModal = ({ semester }: { semester: string }) => {
  const { open, toggleModal } = useOpenModal();

  const { desc1, desc2, file, handleSubmit, isError } =
    useNewMileageForm(semester);

  const handleSubmitForm = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>,
  ) => {
    toggleModal();
    handleSubmit(e);

    if (isError) {
      alert('post 실패');
    }
  };

  return (
    <Modal
      open={open}
      toggleModal={toggleModal}
      trigger={<Button label="등록하기" />}
      size="large"
    >
      <Modal.Header position="center">마일리지 활동 등록하기</Modal.Header>
      <Modal.Body position="center">
        <S.Form style={{ width: '100%' }} onSubmit={handleSubmitForm}>
          <Flex.Row padding="1rem 0">
            <Dropdown
              label="년도 및 학기"
              items={[semester]}
              selectedItem={semester}
              setSelectedItem={() => {}}
              width="200px"
            />
          </Flex.Row>

          <FormField>
            <FormField.Label label={'등록 상세 정보'} required />
            <FormField.Input
              placeholder="활동 항목에 대해 작성 해주세요"
              fullWidth
              value={desc1.value}
              onChange={desc1.handleChange}
            />
            <FormField.ErrorMessage value={desc1.errorMessage} />
          </FormField>

          <FormField>
            <FormField.Label label={'추가 설명'} />
            <FormField.Input
              placeholder="활동을 자세히 설명해주세요"
              fullWidth
              value={desc2.value}
              onChange={desc2.handleChange}
            />
            <FormField.Box />
          </FormField>

          <Flex.Row justify="space-between" align="center">
            <Heading as="h4">
              {file.value
                ? file.value.name
                : '활동을 증명할 파일을 업로드해주세요 (파일 포맷 jpg, png, pdf)'}
            </Heading>
            <UploadButton
              label="첨부파일 업로드"
              onUpload={file.handleChange}
            />
          </Flex.Row>
          <Flex.Row justify="center" gap="1rem">
            <Button
              label="취소하기"
              onClick={toggleModal}
              size="large"
              isRound
              variant="outlined"
            />
            <Button type="submit" label="추가히기" size="large" isRound />
          </Flex.Row>
        </S.Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddMileageModal;

const S = {
  Form: styled('form')`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  `,
};
