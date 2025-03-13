import { BoxSkeleton, Flex, Table } from '@/components';
import {
  DeleteSubmittedMileageModal,
  EditSubmittedMileageModal,
  SubmittedMileageModal,
} from '@/components/AddMileage';
import { useGetSubmittedMileageQuery } from '@/hooks/queries';
import { useAuthStore } from '@/stores';
import { THeader } from '@/types/table';
import { getDate } from '@/utils/getDate';
import { useMemo } from 'react';

const headerItems: THeader[] = [
  { text: '학기', value: 'semester' },
  { text: '항목', value: 'subitemName' },
  { text: '등록 상세 정보', value: 'description1' },
  { text: '신청날짜', value: 'modDate' },
  { text: '상세 내역 보기', value: 'overview', align: 'center' },
  { text: '수정/삭제', value: 'func', align: 'center' },
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
        subitemName: item.subitemName,
        description1: item.description1,
        modDate: getDate(item.modDate),
        func: (
          <Flex.Row gap=".5rem" justify="center">
            <EditSubmittedMileageModal item={item} />
            <DeleteSubmittedMileageModal item={item} />
          </Flex.Row>
        ),
        overview: <SubmittedMileageModal item={item} />,
      })) ?? [],
    [submittedMileageList],
  );

  if (isLoading) return <BoxSkeleton />;

  return <Table headItems={headerItems} bodyItems={bodyItems} />;
};

export default SubmittedMileageTable;
