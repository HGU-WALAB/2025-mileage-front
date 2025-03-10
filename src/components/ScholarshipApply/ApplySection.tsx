import { Flex } from '@/components';
import ApplySucceedModal from '@/components/ScholarshipApply/ApplySucceedModal';
import { usePostScholarshipApplyMutation } from '@/hooks/queries';
import { useAuthStore } from '@/stores';
import { styled } from '@mui/material';
import { toast } from 'react-toastify';

const ApplySection = ({ isAgree }: { isAgree: boolean }) => {
  // TODO: 이후 유저 데이터 처리 로직 추가 예정
  const { student } = useAuthStore();
  const { mutateAsync: postScholarship, isSuccess } =
    usePostScholarshipApplyMutation();

  const handleApply = () => {
    if (!isAgree) {
      toast.error('개인 정보 수집을 동의해주세요!');
      return;
    }

    if (student) {
      postScholarship({
        studentId: student.studentId,
        isAgree,
      });
    }
  };

  return (
    <Flex.Row justify="center" margin="0 0 1rem">
      <S.ApplyButton
        onClick={handleApply}
        justify="center"
        align="center"
        gap="1rem"
      >
        마일리지 장학금 신청하기
      </S.ApplyButton>
      <ApplySucceedModal isSucceed={isSuccess} />
    </Flex.Row>
  );
};

export default ApplySection;

const S = {
  ApplyButton: styled(Flex.Row)`
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-radius: 1rem;
    color: ${({ theme }) => theme.palette.white};
    ${({ theme }) => theme.typography.h2};
    padding: 1.5rem 2.5rem;

    &:hover,
    :active {
      background-color: ${({ theme }) => theme.palette.blue600};
    }
  `,
};
