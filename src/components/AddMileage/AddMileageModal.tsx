import { Button, Modal } from '@/components';
import { useOpenModal } from '@/hooks';

const AddMileageModal = () => {
  const { open, toggleModal } = useOpenModal();

  return (
    <Modal
      open={open}
      toggleModal={toggleModal}
      trigger={<Button label="등록하기" />}
      size="large"
    >
      <Modal.Header position="center">마일리지 활동 등록하기</Modal.Header>
      <Modal.Body position="center">?</Modal.Body>
      <Modal.Footer position="center">
        <Button label="닫기" onClick={toggleModal} />
      </Modal.Footer>
    </Modal>
  );
};

export default AddMileageModal;
