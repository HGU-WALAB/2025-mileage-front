import { Flex, Title } from '@/components';
import { MileageTable } from '@/components/MileageList';
import { useGroupedMileageList } from '@/hooks';

const MileageTableListSection = () => {
  const groupedMileageList = useGroupedMileageList();

  return (
    <>
      {groupedMileageList.map(list => (
        <Flex.Column padding="1rem 0" key={list.categoryId}>
          <Title label={list.categoryName} />
          <MileageTable key={list.categoryId} mileageList={list.items} />
        </Flex.Column>
      ))}
    </>
  );
};

export default MileageTableListSection;
