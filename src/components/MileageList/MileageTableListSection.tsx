import { Flex, TableListSkeleton, Title } from '@/components';
import { EmptyMileageTable, MileageTable } from '@/components/MileageList';
import { useGroupedMileageList, useQueryParams } from '@/hooks';
import { useAuthStore } from '@/stores';
import { useEffect } from 'react';

const MileageTableListSection = () => {
  const { currentSemester } = useAuthStore();
  const { updateQueryParams } = useQueryParams();
  const { groupedMileageList, isLoading } = useGroupedMileageList();

  useEffect(() => {
    updateQueryParams({ semester: currentSemester });
  }, [currentSemester]);

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
