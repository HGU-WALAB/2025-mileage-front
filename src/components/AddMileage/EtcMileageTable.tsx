import Table from '@/components/_common/Table/Table';
import { AddMileageModal } from '@/components/AddMileage';
import useGetEtcMileageQuery from '@/hooks/queries/useGetEtcMileageQuery';
import { useSearchParams } from 'react-router-dom';

const EtcMileageTable = () => {
  const [searchParams] = useSearchParams();

  const { data: etcMileageList } = useGetEtcMileageQuery({
    semester: searchParams.get('semester') ?? '',
  });

  const bodyItems =
    etcMileageList?.map((item, index) => ({
      id: index + 1,
      semester: item.semester,
      categoryName: item.categoryName,
      subitemName: item.subitemName,
      addModal: <AddMileageModal />,
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
