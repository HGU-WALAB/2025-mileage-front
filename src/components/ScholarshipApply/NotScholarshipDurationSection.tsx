import { EmptyBoxImg } from '@/assets';
import { Flex, Heading } from '@/components';
import { MileageBannerSection } from '@/components/ScholarshipApply';
import { styled } from '@mui/material';

const NotScholarshipDurationSection = () => {
  return (
    <Flex.Column gap="1rem" width="100%" height="100%">
      <MileageBannerSection />
      <Flex.Column
        width="100%"
        height="50%"
        align="center"
        justify="center"
        gap="1rem"
      >
        <EmptyBoxImg width={100} height={100} />
        <S.Text as="h3">현재 마일리지 장학금 신청기간이 아닙니다.</S.Text>
        <S.Text as="h3">신청 기한 내에 마일리지 장학금을 신청해주세요.</S.Text>
      </Flex.Column>
    </Flex.Column>
  );
};

export default NotScholarshipDurationSection;

const S = {
  Text: styled(Heading)`
    ${({ theme }) => theme.typography.h3}
    color: ${({ theme }) => theme.palette.grey500};
  `,
};
