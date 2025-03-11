import { AlertBoxIcon, CheckBoxIcon } from '@/assets';
import { Text } from '@/components';
import Flex from '@/components/_common/Flex/Flex';
import { useGetIsAppliedScholarshipQuery } from '@/hooks/queries';
import { useAuthStore } from '@/stores';
import { styled } from '@mui/material';

const applyCheck = {
  completed: {
    title: '장학금 신청을 완료하셨습니다!',
    desc: '이미 신청을 완료하셨습니다.',
  },
  uncompleted: {
    title: '장학금 신청기회를 놓치지 마세요!',
    desc: '지금 신청하면 장학금을 받을수있어요!',
  },
};

const IsApplyCheckSection = () => {
  const { student } = useAuthStore();
  const { data: isApplied } = useGetIsAppliedScholarshipQuery();

  if (student.studentType === '기타') return;

  const { title, desc } =
    applyCheck[isApplied?.isApply ? 'completed' : 'uncompleted'];

  return (
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
  );
};

export default IsApplyCheckSection;

const S = {
  Container: styled(Flex.Row)`
    background-color: ${({ theme }) => theme.palette.white};
    border-radius: 0.5rem;
    font-size: 10px;
  `,
};
