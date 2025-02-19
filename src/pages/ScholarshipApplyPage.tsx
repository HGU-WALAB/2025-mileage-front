import { Flex, Heading } from '@/components';
import {
  ApplySection,
  ConsentSection,
  MileageCountSection,
} from '@/components/ScholarshipApply';

const ScholarshipApplyPage = () => {
  return (
    <Flex.Column gap="2rem">
      <Heading as="h1">마일리지 장학금 신청</Heading>
      <MileageCountSection />
      <ConsentSection />
      <ApplySection />
    </Flex.Column>
  );
};

export default ScholarshipApplyPage;
