import { Table } from '@/components';
import { AddMileageModal } from '@/components/AddMileage';
import { useGetEtcMileageQuery } from '@/hooks/queries';

const EtcMileageTable = () => {
  const { data: etcMileageList } = useGetEtcMileageQuery();

  const bodyItems =
    etcMileageList?.map(item => ({
      semester: item.semester,
      categoryName: item.categoryName,
      subitemName: item.subitemName,
      addModal: (
        <AddMileageModal semester={item.semester} subitemId={item.subitemId} />
      ),
    })) ?? [];

  return (
    <Table
      headItems={[
        { id: 1, text: '학기', value: 'semester' },
        { id: 2, text: '카테고리', value: 'categoryName' },
        { id: 3, text: '항목', value: 'subitemName' },
        { id: 4, text: '', value: 'addModal' },
      ]}
      bodyItems={bodyItems}
    />
  );
};

export default EtcMileageTable;
