import BoxSkeleton from '@/components/_common/Skeleton/BoxSkeleton';
import { InfoField } from '@/components/My';
import { useGetUserInfoQuery } from '@/hooks/queries';
import { useAuthStore } from '@/stores';
import { styled } from '@mui/material';

const UserInfoSection = () => {
  const { student } = useAuthStore();
  const { data: userInfo, isLoading } = useGetUserInfoQuery(
    student?.studentId ?? '',
  );

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
        .filter(([key]) => key !== 'currentSemester')
        .sort(
          ([keyA], [keyB]) =>
            customOrder.indexOf(keyA) - customOrder.indexOf(keyB),
        )
        .map(([key, value]) => (
          <InfoField info={[key, value]} />
        ))}
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
