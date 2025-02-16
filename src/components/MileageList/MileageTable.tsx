import { Table } from '@/components';
import { MileageResponse } from '@/types/mileage';

interface Props {
  mileageList: MileageResponse[];
}

const MileageTable = ({ mileageList }: Props) => {
  const bodyItems = mileageList.map((item, index) => ({
    id: index + 1,
    semester: item.semester,
    categoryName: item.categoryName,
    description: item.description,
    done: item.done ? 'Y' : 'N',
  }));

  return (
    <Table
      headItems={[
        { id: 1, text: '학기', value: 'semester' },
        { id: 2, text: '항목명', value: 'categoryName' },
        { id: 3, text: '내용', value: 'description' },
        { id: 4, text: '참여여부', value: 'done' },
      ]}
      bodyItems={bodyItems}
    />
  );
};

export default MileageTable;
