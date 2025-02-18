import { Flex, Title } from '@/components';
import { EtcMileageTable } from '@/components/AddMileage';

const EtcMileageSection = () => {
  return (
    <Flex.Column height="50%">
      <Title label="신청 가능 마일리지" />
      <EtcMileageTable />
    </Flex.Column>
  );
};

export default EtcMileageSection;
