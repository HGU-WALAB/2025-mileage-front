import { Table } from '@/components';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { CapabilityDetailResponse } from '@/pages/dashboard/types/capability';
import { THeader } from '@/types/table';
import { useMediaQuery } from '@mui/material';

export const CapabilityDetailTable = ({
  capabilityList,
}: {
  capabilityList: CapabilityDetailResponse[];
}) => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);

  const mobileHiddenHeaders = ['카테고리명', '내용'];
  const visibleHeaders = isMobile
    ? headerItems.filter(item => !mobileHiddenHeaders.includes(item.text))
    : headerItems;

  const bodyItems =
    capabilityList && capabilityList.length > 0
      ? capabilityList
      : [{ subitemName: '등록된 항목이 없어요' }];

  return <Table headItems={visibleHeaders} bodyItems={bodyItems} />;
};

const headerItems: THeader[] = [
  { text: '학기', value: 'semester', width: '100px' },
  { text: '항목명', value: 'subitemName', width: '200px' },
  { text: '내용', value: 'description1', width: '300px' },
];
