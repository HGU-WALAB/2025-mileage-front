import { Heading } from '@/components';
import { EtcMileageTable } from '@/components/AddMileage';

const AddMileagePage = () => {
  return (
    <>
      <Heading as={'h1'} margin="0 0 1rem">
        마일리지 등록
      </Heading>
      <EtcMileageTable />
    </>
  );
};

export default AddMileagePage;
