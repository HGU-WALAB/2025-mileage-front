import { Button, Flex } from '@/components';
import { TOAST_MESSAGES } from '@/constants/toastMessage';
import { useOpenModal } from '@/hooks';
import { trackScholarshipApplyButton } from '@/service/amplitude/trackEvent';
import { useAuthStore } from '@/stores';
import { styled } from '@mui/material';
import { toast } from 'react-toastify';

import { useGetIsAppliedScholarshipQuery } from '../../hooks/useGetIsAppliedScholarshipQuery';
import { usePostScholarshipApplyMutation } from '../../hooks/usePostScholarshipApplyMutation';
import { ApplySucceedModal } from './ApplySucceedModal';

export const ApplySection = ({ isAgree }: { isAgree: boolean }) => {
  const { isApplied } = useGetIsAppliedScholarshipQuery();

  const { user } = useAuthStore();
  const { open, toggleModal } = useOpenModal(false);
  const { mutate: postScholarship } = usePostScholarshipApplyMutation();

  const handleApply = () => {
    if (!isAgree) {
      toast.error(TOAST_MESSAGES.checkConsent);
      return;
    }

    trackScholarshipApplyButton();
    postScholarship(
      {
        studentId: user.studentId,
        isAgree,
      },
      {
        onSuccess: () => {
          toggleModal();
        },
      },
    );
  };

  return (
    <Flex.Row justify="center" margin="2rem 0">
      {isApplied?.isApply ? (
        <S.AppliedBox
          label="장학금 신청을 완료했습니다!"
          color="blue"
          variant="outlined"
        />
      ) : (
        <S.ApplyButton
          label={`${user.studentType} 마일리지 장학금 신청하기`}
          onClick={handleApply}
          disabled={!isAgree}
        />
      )}
      <ApplySucceedModal isSucceed={open} />
    </Flex.Row>
  );
};

const S = {
  ApplyButton: styled(Button)`
    border-radius: 1rem;
    ${({ theme }) => theme.typography.h2};
    padding: 2.5rem 3rem;
  `,
  AppliedBox: styled(Button)`
    border-radius: 1rem;
    ${({ theme }) => theme.typography.h2};
    padding: 2.5rem 3rem;
  `,
};
