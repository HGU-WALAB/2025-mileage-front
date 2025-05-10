import { HelpIcon } from '@/assets';
import { BoxSkeleton, Flex, Heading } from '@/components';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { boxShadow } from '@/styles/common';
import { getDate } from '@/utils/getDate';
import { styled, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';

import { useGetUserInfoQuery } from '@/pages/LoginPage/hooks/useGetUserInfoQuery';

import { InfoField } from './InfoField';
import { InfoGuideSection } from './InfoGuideSection';
import { RefreshUserInfoButton } from './RefreshUserInfoButton';

export const UserInfoSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);
  const { userInfo, isLoading } = useGetUserInfoQuery();

  const [showGuide, setShowGuide] = useState(false);

  const customOrder = [
    'studentName',
    'studentId',
    'studentEmail',
    'department',
    'major1',
    'major2',
    'grade',
    'term',
  ];

  if (isLoading) return <BoxSkeleton height={400} />;
  return (
    <S.Section
      width="50%"
      justify="space-around"
      align="center"
      padding="1rem"
      gap="1rem"
      backgroundColor={theme.palette.variant.default}
      wrap="wrap"
      margin="auto 0"
    >
      <Flex.Row
        width="100%"
        justify="space-between"
        padding="0 1rem"
        style={{ color: theme.palette.primary.main }}
      >
        <Heading as="h2">나의 정보 확인하기</Heading>

        <div
          onMouseEnter={() => setShowGuide(true)}
          onMouseLeave={() => setShowGuide(false)}
        >
          <HelpIcon />
        </div>
      </Flex.Row>
      <S.Grid isMobile={isMobile}>
        {Object.entries(userInfo ?? [])
          .filter(([key]) => customOrder.includes(key))
          .sort(
            ([keyA], [keyB]) =>
              customOrder.indexOf(keyA) - customOrder.indexOf(keyB),
          )
          .map(([key, value]) => (
            <InfoField key={key} info={[key, value]} />
          ))}

        <Flex.Column>
          <S.modDateBox align="flex-end">
            {getDate(userInfo?.modDate ?? '')} 마지막으로 업데이트됨
          </S.modDateBox>
        </Flex.Column>
        <RefreshUserInfoButton />
      </S.Grid>
      {showGuide && (
        <S.ShowGuide>
          <InfoGuideSection />
        </S.ShowGuide>
      )}
    </S.Section>
  );
};

const S = {
  Section: styled(Flex.Row)`
    border-radius: 1rem;
    ${boxShadow}
    position: relative;
  `,
  Grid: styled('div')<{ isMobile: boolean }>`
    display: grid;
    gap: ${({ isMobile }) => (isMobile ? 'none' : '1rem')};
    grid-auto-rows: minmax(100px, auto);
    grid-template-columns: ${({ isMobile }) =>
      `repeat(${isMobile ? 1 : 2}, 1fr)`};
  `,
  modDateBox: styled(Flex.Row)`
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.palette.white};
    font-size: 0.875rem;
    height: fit-content;
    padding: 0.25rem 1rem;
    width: fit-content;
  `,
  ShowGuide: styled('div')`
    left: 1rem;
    position: absolute;
    top: 1rem;
    width: 85%;
  `,
};
