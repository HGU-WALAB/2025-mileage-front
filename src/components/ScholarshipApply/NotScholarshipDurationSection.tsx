import { EmptyBoxImg } from '@/assets';
import { Flex, Heading } from '@/components';
import MileageBannerSection from '@/components/ScholarshipApply/MileageBannerSection';

const NotScholarshipDurationSection = () => {
  return (
    <Flex.Column gap="1rem" width="100%" height="100%">
      <MileageBannerSection />
      <Flex.Column
        width="100%"
        height="40%"
        align="center"
        justify="center"
        gap="1rem"
      >
        <EmptyBoxImg width={100} height={100} />
        <Heading as="h2">현재 마일리지 장학금 신청기간이 아닙니다.</Heading>
        <Heading as="h2">
          신청 기한 내에 마일리지 장학금을 신청해주세요.
        </Heading>
      </Flex.Column>
    </Flex.Column>
  );
};

export default NotScholarshipDurationSection;
