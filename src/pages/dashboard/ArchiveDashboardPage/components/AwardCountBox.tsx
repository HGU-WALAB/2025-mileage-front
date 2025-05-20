import { BuildingIcon, SchoolIcon } from '@/assets';
import { Flex, Heading } from '@/components';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { boxShadow } from '@/styles/common';
import { styled, useMediaQuery } from '@mui/material';

import { AwardType } from '@award/types/award';

interface Props {
  awardType: AwardType;
  length: number;
  onClick: () => void;
}

export const AwardCountBox = ({ awardType, length, onClick }: Props) => {
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

        <S.AwardText>{awardType}</S.AwardText>
      </Flex.Column>

      <S.CountText as="h2" isMobile={isMobile}>
        {length} 개
      </S.CountText>
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
  AwardText: styled(Heading)`
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 1.5rem;
    font-weight: bold;
  `,
  CountText: styled(Heading)<{ isMobile: boolean }>`
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: ${({ isMobile }) => (isMobile ? '2rem' : '3rem')};
    font-weight: bold;
  `,
};
