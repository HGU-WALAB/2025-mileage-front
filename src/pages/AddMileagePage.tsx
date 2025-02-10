import { Heading } from '@/components';
import { AddableItemTable } from '@/components/AddMileage';

const AddMileagePage = () => {
  return (
    <>
      <Heading as={'h1'}>마일리지 등록</Heading>
      <AddableItemTable />
    </>
  );
};

export default AddMileagePage;
