import { Flex } from '@/components';
import { usePostScholarshipApply } from '@/hooks/queries';
import { useAuthStore } from '@/stores';
import { styled } from '@mui/material';

const ApplySection = ({ isAgree }: { isAgree: boolean }) => {
  // TODO: 이후 유저 데이터 처리 로직 추가 예정
  const { student } = useAuthStore();
  const { mutateAsync: postScholarship } = usePostScholarshipApply();

  const handleApply = () => {
    if (!isAgree) {
      alert('동의해야 신청 가능');
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
    <Flex.Row justify="center">
      <S.ApplyButton
        onClick={handleApply}
        justify="center"
        align="center"
        gap="1rem"
      >
        마일리지 장학금 신청하기
      </S.ApplyButton>
    </Flex.Row>
  );
};

export default ApplySection;

const S = {
  ApplyButton: styled(Flex.Row)`
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-radius: 1rem;
    color: ${({ theme }) => theme.palette.white};
    font-size: 20px;
    font-weight: bold;
    padding: 1.5rem 2.5rem;

    &:hover,
    :active {
      background-color: ${({ theme }) => theme.palette.primary.dark};
    }
  `,
};
