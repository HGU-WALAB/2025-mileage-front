import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { styled, useMediaQuery } from '@mui/material';

import { AWARD_TYPES } from '@award/constants/awardTypeLabels';
import { useGroupedAwardList } from '@award/hooks/useGroupedAwardList';

import { AwardCountBox } from './AwardCountBox';
import { AwardPageForwardButton } from './AwardPageForwardButton';

export const AwardArchiveGrid = () => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);
  const { groupedAwardList } = useGroupedAwardList();

  const filledAwardList = AWARD_TYPES.map(type => {
    const found = groupedAwardList.find(g => g.awardType === type);
    return found ?? { awardType: type, items: [] };
  });

  return (
    <S.GridLayout isMobile={isMobile}>
      {filledAwardList.map(group => (
        <AwardCountBox
          key={group.awardType}
          awardType={group.awardType}
          length={group.items.length}
        />
      ))}

      <AwardPageForwardButton />
    </S.GridLayout>
  );
};

const S = {
  GridLayout: styled('div')<{ isMobile: boolean }>`
    display: grid;
    gap: 1rem;
    grid-template-columns: ${({ isMobile }) =>
      isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'};

    ${({ isMobile }) =>
      isMobile &&
      `
        & > *:last-of-type {
          grid-column: span 2;
        }
      `}
  `,
};
