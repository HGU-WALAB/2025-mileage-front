import { BoxSkeleton, Table } from '@/components';
import { AddMileageModal } from '@/components/AddMileage';
import { useGetEtcMileageQuery } from '@/hooks/queries';
import { THeader } from '@/types/table';
import { useMemo } from 'react';

const headerItems: THeader[] = [
  { text: '학기', value: 'semester' },
  { text: '카테고리', value: 'categoryName' },
  { text: '항목', value: 'subitemName' },
  { text: '', value: 'addModal', align: 'center' },
];

const EtcMileageTable = () => {
  const { data: etcMileageList, isLoading } = useGetEtcMileageQuery();

  const bodyItems = useMemo(
    () =>
      etcMileageList?.map(item => ({
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

  return <Table headItems={headerItems} bodyItems={bodyItems} />;
};

export default EtcMileageTable;
