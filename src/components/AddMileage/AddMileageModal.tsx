import { Button, FormField, Modal } from '@/components';
import { useInput, useInputWithValidate, useOpenModal } from '@/hooks';
import { validateRequired } from '@/utils/validate';

const AddMileageModal = () => {
  const { open, toggleModal } = useOpenModal();
  const {
    value: title,
    handleChange: handleTitle,
    errorMessage: titleErrorMessage,
  } = useInputWithValidate('', validateRequired);
  const { value: desc, handleChange: handleDesc } = useInput('dd');

  return (
    <Modal
      open={open}
      toggleModal={toggleModal}
      trigger={<Button label="등록하기" />}
      size="large"
    >
      <Modal.Header position="center">마일리지 활동 등록하기</Modal.Header>
      <Modal.Body position="center">
        <form style={{ width: '100%' }}>
          <FormField>
            <FormField.Label label={'등록 상세 정보'} required />
            <FormField.Input
              placeholder="활동 항목에 대해 작성 해주세요"
              fullWidth
              value={title}
              onChange={handleTitle}
            />
            <FormField.ErrorMessage value={titleErrorMessage} />
          </FormField>

          <FormField>
            <FormField.Label label={'추가 설명'} />
            <FormField.Input
              placeholder="활동을 자세히 설명해주세요"
              fullWidth
              value={desc}
              onChange={handleDesc}
            />
            <FormField.Box />
          </FormField>
        </form>
      </Modal.Body>
      <Modal.Footer position="center">
        <Button label="닫기" onClick={toggleModal} />
      </Modal.Footer>
    </Modal>
  );
};

export default AddMileageModal;
