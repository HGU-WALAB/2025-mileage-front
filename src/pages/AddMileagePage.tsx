import { Flex } from '@/components';
import {
  EtcMileageSection,
  SubmittedMileageSection,
} from '@/components/AddMileage';
import { pageHeight } from '@/constants/layoutSize';

const AddMileagePage = () => {
  return (
    <Flex.Column margin="1rem 2rem" height={pageHeight}>
      <EtcMileageSection />
      <SubmittedMileageSection />
    </Flex.Column>
  );
};

export default AddMileagePage;
