import { Table } from '@/components';
import { useGetSubmittedMileageQuery } from '@/hooks/queries';
import { useAuthStore } from '@/stores';

const SubmittedMileageTable = () => {
  const { student } = useAuthStore();
  const { data: submittedMileageList } = useGetSubmittedMileageQuery(
    student?.studentId ?? '',
  );

  const bodyItems =
    submittedMileageList?.map(item => ({
      semester: item.semester,
      subitemName: item.subitemName,
      description1: item.description1,
      modDate: item.modDate,
      addModal: <></>,
    })) ?? [];

  return (
    <Table
      headItems={[
        { id: 1, text: '학기', value: 'semester' },
        { id: 2, text: '항목', value: 'subitemName' },
        { id: 3, text: '설명', value: 'description1' },
        { id: 4, text: '신청날짜', value: 'modDate' },
        { id: 5, text: '', value: 'addModal' },
      ]}
      bodyItems={bodyItems}
    />
  );
};

export default SubmittedMileageTable;
