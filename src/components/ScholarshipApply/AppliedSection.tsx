import { Button, Flex } from '@/components';
import { styled } from '@mui/material';

const AppliedSection = () => {
  return (
    <Flex.Row justify="center" margin="0 0 1rem">
      <S.AppliedBox
        label="장학금 신청을 완료했습니다!"
        color="blue"
        variant="outlined"
      />
    </Flex.Row>
  );
};

export default AppliedSection;

const S = {
  AppliedBox: styled(Button)`
    border-radius: 1rem;
    ${({ theme }) => theme.typography.h2};
    padding: 2.5rem 3rem;
  `,
};
