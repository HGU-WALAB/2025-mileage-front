import { BoxSkeleton, Table } from '@/components';
import { AddMileageModal } from '@/components/AddMileage';
import { useGetEtcMileageQuery } from '@/hooks/queries';
import { useMemo } from 'react';

const EtcMileageTable = () => {
  const { data: etcMileageList, isLoading } = useGetEtcMileageQuery();

  const bodyItems = useMemo(
    () =>
      etcMileageList?.map((item, index) => ({
        id: index + 1,
        semester: item.semester,
        categoryName: item.categoryName,
        subitemName: item.subitemName,
        addModal: (
          <AddMileageModal
            semester={item.semester}
            subitemId={item.subitemId}
          />
        ),
      })) ?? [],
    [etcMileageList],
  );

  if (isLoading) return <BoxSkeleton />;

  return (
    <Table
      headItems={[
        { id: 1, text: '학기', value: 'semester' },
        { id: 2, text: '카테고리', value: 'categoryName' },
        { id: 3, text: '항목', value: 'subitemName' },
        { id: 4, text: '', value: 'addModal', align: 'center' },
      ]}
      bodyItems={bodyItems}
    />
  );
};

export default EtcMileageTable;
