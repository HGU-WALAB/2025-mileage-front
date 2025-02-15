import { CheckCircleIcon, CheckCircleOutlineIcon } from '@/assets';
import { Flex } from '@/components';
import { usePostScholarshipApply } from '@/hooks/queries';
import { useAuthStore } from '@/stores';
import { styled } from '@mui/material';
import { useState } from 'react';

const ApplySection = () => {
  // TODO: 이후 유저 데이터 처리 로직 추가 예정
  const { student } = useAuthStore();
  const [isAgree, setIsAgree] = useState(false);
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
    <Flex.Row justify="center" gap="2rem">
      <S.AgreeButton
        onClick={() => setIsAgree(prev => !prev)}
        isAgree={isAgree}
        justify="center"
        align="center"
        gap="1rem"
      >
        {isAgree ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />}
        동의하기
      </S.AgreeButton>
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
  AgreeButton: styled(Flex.Row)<{ isAgree: boolean }>`
    background-color: ${({ theme, isAgree }) =>
      isAgree ? theme.palette.grey200 : 'none'};
    border: 2px solid ${({ theme }) => theme.palette.grey300};
    border-radius: 1rem;
    padding: 1rem 2rem;
    width: fit-content;

    &:hover,
    :active {
      background-color: ${({ theme }) => theme.palette.grey200};
    }
  `,
  ApplyButton: styled(Flex.Row)`
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-radius: 1rem;
    color: ${({ theme }) => theme.palette.white};
    font-weight: bold;
    padding: 1rem 2rem;

    &:hover,
    :active {
      background-color: ${({ theme }) => theme.palette.primary.dark};
    }
  `,
};
