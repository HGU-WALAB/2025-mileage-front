import { Heading } from '@/components';
import {
  MileageFilterSection,
  MileageTableListSection,
} from '@/components/MileageList';

const MileageListPage = () => {
  return (
    <>
      <Heading as={'h1'}>마일리지 조회</Heading>
      <MileageFilterSection />
      <MileageTableListSection />
    </>
  );
};

export default MileageListPage;
