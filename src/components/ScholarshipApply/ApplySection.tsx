import { Button, Flex } from '@/components';
import { ApplySucceedModal } from '@/components/ScholarshipApply';
import { TOAST_MESSAGES } from '@/constants/toastMessage';
import { usePostScholarshipApplyMutation } from '@/hooks/queries';
import { trackScholarshipApplyButton } from '@/service/amplitude/trackEvent';
import { useAuthStore } from '@/stores';
import { styled } from '@mui/material';
import { toast } from 'react-toastify';

const ApplySection = ({ isAgree }: { isAgree: boolean }) => {
  const { student } = useAuthStore();
  const { mutateAsync: postScholarship, isSuccess } =
    usePostScholarshipApplyMutation();

  const handleApply = () => {
    if (!isAgree) {
      toast.error(TOAST_MESSAGES.checkConsent);
      return;
    }

    trackScholarshipApplyButton();
    postScholarship({
      studentId: student.studentId,
      isAgree,
    });
  };

  return (
    <Flex.Row justify="center" margin="0 0 1rem">
      <S.ApplyButton
        label={`${student.studentType} 마일리지 장학금 신청하기`}
        onClick={handleApply}
        disabled={!isAgree}
      />
      <ApplySucceedModal isSucceed={isSuccess} />
    </Flex.Row>
  );
};

export default ApplySection;

const S = {
  ApplyButton: styled(Button)`
    border-radius: 1rem;
    ${({ theme }) => theme.typography.h2};
    padding: 2.5rem 3rem;
  `,
};
