import { Table } from '@/components';
import { AddMileageModal } from '@/components/AddMileage';
import { useGetEtcMileageQuery } from '@/hooks/queries';

const EtcMileageTable = () => {
  const { data: etcMileageList } = useGetEtcMileageQuery();

  const bodyItems =
    etcMileageList?.map((item, index) => ({
      id: index + 1,
      semester: item.semester,
      categoryName: item.categoryName,
      subitemName: item.subitemName,
      addModal: <AddMileageModal semester={item.semester} />,
    })) ?? [];

  return (
    <Table
      headItems={[
        { id: 1, text: '번호', value: 'id' },
        { id: 2, text: '학기', value: 'semester' },
        { id: 3, text: '카테고리', value: 'categoryName' },
        { id: 4, text: '항목', value: 'subitemName' },
        { id: 5, text: '추가하기', value: 'addModal' },
      ]}
      bodyItems={bodyItems}
    />
  );
};

export default EtcMileageTable;
