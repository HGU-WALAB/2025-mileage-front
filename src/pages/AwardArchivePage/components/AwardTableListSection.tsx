import { Flex, Title } from '@/components';

import { useGroupedAwardList } from '../hooks/useGroupedAwardList';
import { AwardTable } from './AwardTable';

export const AwardTableListSection = () => {
  const { groupedAwardList } = useGroupedAwardList();

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
