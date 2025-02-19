import { AlertModal } from '@/components';

const UpdateSucceedModal = ({ isSucceed }: { isSucceed: boolean }) => {
  return (
    <AlertModal
      alertOpen={isSucceed}
      alertMessage="정보 업데이트가 완료되었습니다"
    />
  );
};

export default UpdateSucceedModal;
