import { EmptyBoxImg, JoinedCheckCircleIcon } from '@/assets';
import { Flex, Heading, Table } from '@/components';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { MileageResponse } from '@/types/mileage';
import { THeader } from '@/types/table';
import { useMediaQuery, useTheme } from '@mui/material';
import { useMemo } from 'react';

interface Props {
  mileageList: MileageResponse[];
}

const headerItems: THeader[] = [
  { text: '학기', value: 'semester', width: '100px' },
  { text: '카테고리명', value: 'categoryName', width: '200px' },
  { text: '항목명', value: 'subitemName', width: '200px' },
  { text: '내용', value: 'description' },
  { text: '참여여부', value: 'done', align: 'center', width: '150px' },
];

const MileageTable = ({ mileageList }: Props) => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);

  const bodyItems = useMemo(
    () =>
      mileageList.map(item => ({
        semester: item.semester,
        categoryName: item.categoryName,
        subitemName: item.subitemName,
        description: item.description,
        done: item.done ? <JoinedCheckCircleIcon /> : null,
      })),
    [mileageList],
  );

  if (!mileageList.length) return <EmptyTable />;

  return (
    <Table
      headItems={
        isMobile
          ? headerItems.filter(item => !'카테고리명, 내용'.includes(item.text))
          : headerItems
      }
      bodyItems={bodyItems}
    />
  );
};

export default MileageTable;

const EmptyTable = () => {
  const theme = useTheme();
  return (
    <Flex.Column
      width="100%"
      height="400px"
      gap="1rem"
      justify="center"
      align="center"
    >
      <EmptyBoxImg />
      <Heading
        as="h2"
        style={{ fontSize: '2rem', color: theme.palette.grey300 }}
      >
        등록된 마일리지가 없어요
      </Heading>
    </Flex.Column>
  );
};
