import { BoxSkeleton, Flex, Table } from '@/components';
import {
  DeleteSubmittedMileageModal,
  EditSubmittedMileageModal,
  SubmittedMileageModal,
} from '@/components/AddMileage';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { useGetSubmittedMileageQuery } from '@/hooks/queries';
import { THeader } from '@/types/table';
import { getDate } from '@/utils/getDate';
import { useMediaQuery } from '@mui/material';
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
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);
  const { data: submittedMileageList, isLoading } =
    useGetSubmittedMileageQuery();

  const bodyItems = useMemo(
    () =>
      submittedMileageList && submittedMileageList.length > 0
        ? submittedMileageList.map(item => ({
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
          }))
        : [{ semester: '등록된 항목이 없어요' }],
    [submittedMileageList],
  );

  if (isLoading) return <BoxSkeleton />;
  return (
    <Table
      headItems={
        isMobile
          ? headerItems.filter(item => !'항목, 신청날짜'.includes(item.text))
          : headerItems
      }
      bodyItems={bodyItems}
    />
  );
};

export default SubmittedMileageTable;
