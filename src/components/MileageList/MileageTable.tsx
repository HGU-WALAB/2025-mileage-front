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
        { id: 1, text: '번호', value: 'id' },
        { id: 2, text: '학기', value: 'semester' },
        { id: 3, text: '항목명', value: 'categoryName' },
        { id: 4, text: '비고', value: 'description' },
        { id: 5, text: '참여여부', value: 'done' },
      ]}
      bodyItems={bodyItems}
    />
  );
};

export default MileageTable;
