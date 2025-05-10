import { AlertModal } from '@/components';

export const ApplySucceedModal = ({ isSucceed }: { isSucceed: boolean }) => {
  return (
    <AlertModal
      alertOpen={isSucceed}
      alertMessage="마일리지 장학금 신청이 완료되었습니다"
    />
  );
};
