import { Heading } from '@/components';
import {
  MileageFilterSection,
  MileageTableListSection,
} from '@/components/MileageList';

const MileageListPage = () => {
  return (
    <div>
      <Heading as={'h1'}>마일리지 조회</Heading>
      <MileageFilterSection />
      <MileageTableListSection />
    </div>
  );
};

export default MileageListPage;
