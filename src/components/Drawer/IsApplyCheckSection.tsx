import { AlertBoxIcon, CheckBoxIcon } from '@/assets';
import { Text } from '@/components';
import Flex from '@/components/Flex/Flex';
import { useAuthStore } from '@/stores';
import { styled } from '@mui/material';

import { useGetIsAppliedScholarshipQuery } from '@mileage/hooks/useGetIsAppliedScholarshipQuery';
import { useScholarshipDuration } from '@mileage/hooks/useScholarshipDuration';

const applyCheck = {
  completed: {
    title: '장학금 신청을 완료하셨습니다!',
    desc: '이미 신청을 완료하셨습니다',
  },
  uncompleted: {
    title: '장학금 신청을 놓치지 마세요!',
    desc: '지금 장학금을 신청할 수 있어요',
  },
};

const IsApplyCheckSection = () => {
  const { user } = useAuthStore();
  const { isApplied } = useGetIsAppliedScholarshipQuery();
  const { isScholarshipDuration } = useScholarshipDuration();

  if (user.studentType === '기타') return;

  const { title, desc } =
    applyCheck[isApplied?.isApply ? 'completed' : 'uncompleted'];

  return (
    isScholarshipDuration && (
      <S.Container
        justify="space-around"
        align="flex-start"
        height="fit-content"
        width="100%"
        padding=".5rem"
        gap=".25rem"
      >
        <Flex.Column margin=".125rem">
          {isApplied?.isApply ? <CheckBoxIcon /> : <AlertBoxIcon />}
        </Flex.Column>
        <Flex.Column>
          <Text bold>{title}</Text>
          <Text>{desc}</Text>
        </Flex.Column>
      </S.Container>
    )
  );
};

export default IsApplyCheckSection;

const S = {
  Container: styled(Flex.Row)`
    background-color: ${({ theme }) => theme.palette.white};
    border-radius: 0.5rem;
    font-size: 12px;
  `,
};
