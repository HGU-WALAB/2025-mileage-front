import { Flex } from '@/components';
import {
  EtcMileageSection,
  SubmittedMileageSection,
} from '@/components/AddMileage';

const AddMileagePage = () => {
  return (
    <Flex.Column margin="1rem 2rem">
      <EtcMileageSection />
      <SubmittedMileageSection />
    </Flex.Column>
  );
};

export default AddMileagePage;
