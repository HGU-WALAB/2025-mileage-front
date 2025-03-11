import { BoxSkeleton, Table } from '@/components';
import DeleteSubmittedMileageModal from '@/components/AddMileage/DeleteSubmittedMileageModal';
import EditSubmittedMileageModal from '@/components/AddMileage/EditSubmittedMileageModal';
import SubmittedMileageModal from '@/components/AddMileage/SubmittedMileageModal';
import { useGetSubmittedMileageQuery } from '@/hooks/queries';
import { useAuthStore } from '@/stores';
import { THeader } from '@/types/table';
import getDate from '@/utils/getDate';
import { useMemo } from 'react';

const headerItems: THeader[] = [
  { text: '학기', value: 'semester' },
  { text: '카테고리', value: 'categoryName' },
  { text: '항목', value: 'subitemName' },
  { text: '등록 상세 정보', value: 'description1' },
  { text: '신청날짜', value: 'modDate' },
  { text: '상세보기', value: 'overview', align: 'center' },
  { text: '수정', value: 'edit', align: 'center' },
  { text: '삭제', value: 'delete', align: 'center' },
];

const SubmittedMileageTable = () => {
  const { student } = useAuthStore();
  const { data: submittedMileageList, isLoading } = useGetSubmittedMileageQuery(
    student?.studentId ?? '',
  );

  const bodyItems = useMemo(
    () =>
      submittedMileageList?.map(item => ({
        semester: item.semester,
        category: item.categoryName,
        subitemName: item.subitemName,
        description1: item.description1,
        modDate: getDate(item.modDate),
        overview: <SubmittedMileageModal item={item} />,
        edit: <EditSubmittedMileageModal item={item} />,
        delete: <DeleteSubmittedMileageModal item={item} />,
      })) ?? [],
    [submittedMileageList],
  );

  if (isLoading) return <BoxSkeleton />;

  return <Table headItems={headerItems} bodyItems={bodyItems} />;
};

export default SubmittedMileageTable;
