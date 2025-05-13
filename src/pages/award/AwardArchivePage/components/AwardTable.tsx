import { Table } from '@/components';
import { THeader } from '@/types/table';

import { AwardResponse } from '../../types/award';

interface Props {
  awardList: AwardResponse[];
}

export const AwardTable = ({ awardList }: Props) => {
  return <Table headItems={headerItems} bodyItems={awardList} />;
};

const headerItems: THeader[] = [
  { text: '연도', value: 'awardYear', width: '100px' },
  { text: '대회명', value: 'contestName', width: '200px' },
  { text: '수상내역', value: 'awardName', width: '100px' },
  { text: '주관', value: 'organization', width: '200px' },
  { text: '발급일자', value: 'awardDate', width: '200px' },
];
