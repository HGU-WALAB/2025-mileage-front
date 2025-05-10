import { Flex, Heading, Text } from '@/components';
import { useGetUserInfoQuery } from '@/hooks/queries';
import { useAuthStore } from '@/stores';
import { getOpacityColor } from '@/utils/getOpacityColor';
import { styled, useTheme } from '@mui/material';

const UserSection = () => {
  const theme = useTheme();
  const { student } = useAuthStore();
  const { userInfo, isLoading } = useGetUserInfoQuery();

  return (
    <Flex.Column
      align="center"
      gap=".5rem"
      backgroundColor={getOpacityColor(theme.palette.white, 0.1)}
      width="100%"
      padding="1rem"
      style={{
        border: `0.5px solid ${getOpacityColor(theme.palette.white, 0.7)}`,
        borderRadius: '.5rem',
      }}
    >
      <Flex.Column align="center" width="100%">
        <S.UserBox align="center">
          <Heading as="h3" color={theme.palette.white}>
            {student?.studentName}
          </Heading>
          <Text color={theme.palette.white}>{student?.studentId}</Text>
        </S.UserBox>
        <Text
          style={{
            color: theme.palette.white,
            fontWeight: 'bold',
          }}
        >
          {isLoading ? '-' : userInfo?.department}
        </Text>
        <Text style={{ color: theme.palette.white, fontWeight: 'bold' }}>
          {isLoading ? '-' : userInfo?.major1}
        </Text>
      </Flex.Column>
    </Flex.Column>
  );
};

export default UserSection;

const S = {
  UserBox: styled(Flex.Column)`
    background: linear-gradient(
      135deg,
      ${getOpacityColor('#8043ff', 0.5)},
      ${getOpacityColor('#2e68ff', 0.5)}
    );
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    width: 100%;
  `,
};
