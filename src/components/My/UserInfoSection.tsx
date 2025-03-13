import { BoxSkeleton, Flex } from '@/components';
import { InfoField } from '@/components/My';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { useGetUserInfoQuery } from '@/hooks/queries';
import getDate from '@/utils/getDate';
import { styled, useMediaQuery } from '@mui/material';

const UserInfoSection = () => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);
  const { data: userInfo, isLoading } = useGetUserInfoQuery();

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
      <Flex.Column justify="flex-end" margin="0 0 1rem">
        <S.modDateBox align="flex-end">
          {getDate(userInfo?.modDate ?? '')} 마지막으로 업데이트됨
        </S.modDateBox>
      </Flex.Column>
    </S.Grid>
  );
};

export default UserInfoSection;

const S = {
  modDateBox: styled(Flex.Row)`
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.palette.white};
    font-size: 0.875rem;
    height: fit-content;
    padding: 0.25rem 1rem;
    width: fit-content;
  `,
  Grid: styled('div')<{ isMobile: boolean }>`
    display: grid;
    gap: ${({ isMobile }) => (isMobile ? 'none' : '1rem')};
    grid-auto-rows: minmax(100px, auto);
    grid-template-columns: ${({ isMobile }) =>
      `repeat(${isMobile ? 1 : 3}, 1fr)`};
  `,
};
