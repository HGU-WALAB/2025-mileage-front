import { Flex } from '@/components';
import {
  MileageFilterSection,
  MileageTableListSection,
} from '@/components/MileageList';

const MileageListPage = () => {
  return (
    <Flex.Column margin="1rem 2rem">
      <MileageFilterSection />
      <MileageTableListSection />
    </Flex.Column>
  );
};

export default MileageListPage;
