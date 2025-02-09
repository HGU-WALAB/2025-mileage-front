import Heading from '@/components/_common/Heading/Heading';
import MileageTableListSection from '@/components/MileageList/MileageTableListSection';

const MileageListPage = () => {
  return (
    <div>
      <Heading as={'h1'}>마일리지 조회</Heading>
      <MileageTableListSection />
    </div>
  );
};

export default MileageListPage;
