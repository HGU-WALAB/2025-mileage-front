import { BuildingIcon, SchoolIcon } from '@/assets';
import { Flex, Heading } from '@/components';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { boxShadow } from '@/styles/common';
import { styled, useMediaQuery, useTheme } from '@mui/material';

import { AwardType } from '@award/types/award';

interface Props {
  awardType: AwardType;
  length: number;
  onClick: () => void;
}

export const AwardCountBox = ({ awardType, length, onClick }: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);
  const icon = awardType === '교내' ? <SchoolIcon /> : <BuildingIcon />;

  return (
    <S.Container
      direction={isMobile ? 'column' : 'row'}
      width="100%"
      justify="space-around"
      align="center"
      padding={isMobile ? '1rem' : '1.5rem'}
      gap="1rem"
      wrap="wrap"
      onClick={onClick}
    >
      <Flex.Column justify="center" gap={'.5rem'}>
        <S.IconWrapper justify="center" align="center" isMobile={isMobile}>
          {icon}
        </S.IconWrapper>

        <Heading as="h3" color={theme.palette.primary.main}>
          {awardType}
        </Heading>
      </Flex.Column>

      <Heading
        as="h2"
        style={{ fontSize: '2rem', color: theme.palette.primary.main }}
      >
        {length} 개
      </Heading>
    </S.Container>
  );
};

const S = {
  Container: styled(Flex)`
    background-color: ${({ theme }) => theme.palette.variant.default};
    border-radius: 1rem;
    max-height: 200px;
    ${boxShadow}
    text-align: center;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  `,
  IconWrapper: styled(Flex.Row)<{ isMobile: boolean }>`
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-radius: 50%;
    height: ${({ isMobile }) => (isMobile ? '50px' : '70px')};
    padding: ${({ isMobile }) => (isMobile ? '.5rem' : '1rem')};
    width: ${({ isMobile }) => (isMobile ? '50px' : '70px')};
    ${boxShadow}
  `,
};
