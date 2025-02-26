import { BoxSkeleton, Flex } from '@/components';
import { InfoField } from '@/components/My';
import { useGetUserInfoQuery } from '@/hooks/queries';
import { useAuthStore } from '@/stores';
import getDate from '@/utils/getDate';
import { styled } from '@mui/material';

const UserInfoSection = () => {
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
    <S.Grid>
      {Object.entries(userInfo ?? [])
        .filter(
          ([key]) =>
            key !== 'currentSemester' &&
            key !== 'modDate' &&
            key !== 'studentType',
        )
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
  Grid: styled('div')`
    display: grid;
    gap: 1rem;
    grid-auto-rows: minmax(100px, auto);
    grid-template-columns: repeat(3, 1fr);
    padding: 1rem;
  `,
};
