import { EmptyBoxImg } from '@/assets';
import { Flex, Heading, Table } from '@/components';
import { THeader } from '@/types/table';
import { useTheme } from '@mui/material';

import { AwardResponse } from '../types/award';

interface Props {
  awardList: AwardResponse[];
}

export const AwardTable = ({ awardList }: Props) => {
  if (!awardList.length) return <EmptyTable />;
  return <Table headItems={headerItems} bodyItems={awardList} />;
};

const headerItems: THeader[] = [
  { text: '연도', value: 'awardYear', width: '100px' },
  { text: '대회명', value: 'contestName', width: '200px' },
  { text: '수상내역', value: 'awardName', width: '100px' },
  { text: '주관', value: 'organization', width: '200px' },
  { text: '발급일자', value: 'awardDate', width: '200px' },
];

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
        등록된 상장이 없어요
      </Heading>
    </Flex.Column>
  );
};
