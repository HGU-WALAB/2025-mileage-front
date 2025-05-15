import { Flex, Title } from '@/components';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { styled, useMediaQuery } from '@mui/material';

import { useGroupedAwardList } from '@award/hooks/useGroupedAwardList';

import { AwardCountBox } from './AwardCountBox';
import { AwardPageForwardButton } from './AwardPageForwardButton';

export const AwardArchiveSection = () => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);
  const { groupedAwardList } = useGroupedAwardList();

  return (
    <Flex.Column as="section">
      <Title label="상장 아카이빙" />

      <S.GridLayout isMobile={isMobile}>
        {groupedAwardList.map(group => (
          <AwardCountBox
            key={group.awardType}
            awardType={group.awardType}
            length={group.items.length}
          />
        ))}

        <AwardPageForwardButton />
      </S.GridLayout>
    </Flex.Column>
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
