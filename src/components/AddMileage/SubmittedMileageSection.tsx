import { Flex, Title } from '@/components';
import { SubmittedMileageTable } from '@/components/AddMileage';

const SubmittedMileageSection = () => {
  return (
    <Flex.Column height="50%">
      <Title label="신청 완료 마일리지" />
      <SubmittedMileageTable />
    </Flex.Column>
  );
};

export default SubmittedMileageSection;
