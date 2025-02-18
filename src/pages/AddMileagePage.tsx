import { Flex } from '@/components';
import {
  EtcMileageSection,
  SubmittedMileageSection,
} from '@/components/AddMileage';
import { headerHeight } from '@/constants/layoutSize';

const AddMileagePage = () => {
  return (
    <Flex.Column
      margin="1rem 2rem"
      height={`calc(100% - ${headerHeight + 32}px)`}
    >
      <EtcMileageSection />
      <SubmittedMileageSection />
    </Flex.Column>
  );
};

export default AddMileagePage;
