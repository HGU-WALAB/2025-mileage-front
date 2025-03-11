import { EmptyBoxImg, JoinedCheckCircleIcon } from '@/assets';
import { Flex, Heading, Table } from '@/components';
import { MileageResponse } from '@/types/mileage';
import { THeader } from '@/types/table';
import { useTheme } from '@mui/material';
import { useMemo } from 'react';

interface Props {
  mileageList: MileageResponse[];
}

const headerItems: THeader[] = [
  { text: '학기', value: 'semester' },
  { text: '항목명', value: 'subitemName' },
  { text: '내용', value: 'description' },
  { text: '참여여부', value: 'done', align: 'center' },
];

const MileageTable = ({ mileageList }: Props) => {
  const bodyItems = useMemo(
    () =>
      mileageList.map((item, index) => ({
        id: index + 1,
        semester: item.semester,
        subitemName: item.subitemName,
        description: item.description,
        done: item.done ? <JoinedCheckCircleIcon /> : null,
      })),
    [mileageList],
  );

  if (!mileageList.length) return <EmptyTable />;

  return <Table headItems={headerItems} bodyItems={bodyItems} />;
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
