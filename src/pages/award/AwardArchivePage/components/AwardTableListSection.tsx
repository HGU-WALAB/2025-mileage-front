import { Flex, Title } from '@/components';

import { useGroupedAwardList } from '../../hooks/useGroupedAwardList';
import { AwardTable } from './AwardTable';
import { EmptyTable } from './EmptyTable';

export const AwardTableListSection = () => {
  const { groupedAwardList } = useGroupedAwardList();

  if (!groupedAwardList.length) return <EmptyTable />;
  return (
    <>
      {groupedAwardList.map(group => (
        <Flex.Column padding="1rem 0" key={group.awardType}>
          <Title label={group.awardType} />
          <AwardTable key={group.awardType} awardList={group.items} />
        </Flex.Column>
      ))}
    </>
  );
};
