import { BoxSkeleton, Flex } from '@/components';
import { InfoField } from '@/components/My';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { useGetUserInfoQuery } from '@/hooks/queries';
import { useAuthStore } from '@/stores';
import getDate from '@/utils/getDate';
import { styled, useMediaQuery } from '@mui/material';

const UserInfoSection = () => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);
  const { student } = useAuthStore();
  const { data: userInfo, isLoading } = useGetUserInfoQuery(student.studentId);

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
          <InfoField info={[key, value]} />
        ))}
      <Flex.Row height="100%" align="flex-end" padding="0 0 1rem">
        {getDate(userInfo?.modDate ?? '')} 마지막으로 수정됨
      </Flex.Row>
    </S.Grid>
  );
};

export default UserInfoSection;

const S = {
  Grid: styled('div')<{ isMobile: boolean }>`
    display: grid;
    gap: ${({ isMobile }) => (isMobile ? 'none' : '1rem')};
    grid-auto-rows: minmax(100px, auto);
    grid-template-columns: ${({ isMobile }) =>
      `repeat(${isMobile ? 1 : 3}, 1fr)`};
  `,
};
