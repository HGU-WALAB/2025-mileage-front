import { Table } from '@/components';
import { THeader } from '@/types/table';
import { useMemo } from 'react';

import { useGetEtcMileageQuery } from '../hooks/useGetEtcMileageQuery';
import { AddMileageModal } from './AddMileageModal';

const headerItems: THeader[] = [
  { text: '학기', value: 'semester' },
  { text: '카테고리', value: 'categoryName' },
  { text: '항목', value: 'subitemName' },
  { text: '등록하기', value: 'addModal', align: 'center' },
];

export const EtcMileageTable = () => {
  const { etcMileageList } = useGetEtcMileageQuery();

  const bodyItems = useMemo(
    () =>
      etcMileageList && etcMileageList.length > 0
        ? etcMileageList.map(item => ({
            semester: item.semester,
            categoryName: item.categoryName,
            subitemName: item.subitemName,
            addModal: (
              <AddMileageModal
                semester={item.semester}
                subitemId={item.subitemId}
              />
            ),
          }))
        : [{ semester: '등록 가능한 항목이 없어요' }],
    [etcMileageList],
  );

  return <Table headItems={headerItems} bodyItems={bodyItems} />;
};
