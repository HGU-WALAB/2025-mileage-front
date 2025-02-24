import { Flex, TableListSkeleton, Title } from '@/components';
import { MileageTable } from '@/components/MileageList';
import EmptyMileageTable from '@/components/MileageList/EmptyMileageTable';
import { useGroupedMileageList } from '@/hooks';

const MileageTableListSection = () => {
  const { groupedMileageList, isLoading } = useGroupedMileageList();

  if (isLoading) return <TableListSkeleton />;

  if (!groupedMileageList.length) return <EmptyMileageTable />;

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
