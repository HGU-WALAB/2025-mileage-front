import { Flex, Heading, Text } from '@/components';
import { useGetUserInfoQuery } from '@/hooks/queries';
import { useAuthStore } from '@/stores';
import { getOpacityColor } from '@/utils/getOpacityColor';
import { useTheme } from '@mui/material';

const UserSection = () => {
  const theme = useTheme();
  const { student } = useAuthStore();
  const { data: userInfo, isError } = useGetUserInfoQuery(student.studentId);

  return (
    <Flex.Column
      align="center"
      gap=".5rem"
      backgroundColor={getOpacityColor(theme.palette.white, 0.1)}
      width="100%"
      padding="1rem 0"
      style={{
        border: `0.5px solid ${getOpacityColor(theme.palette.white, 0.7)}`,
        borderRadius: '.5rem',
      }}
    >
      <Flex.Column align="center">
        <Heading as="h3" color={theme.palette.white}>
          {student?.studentName}
        </Heading>
        <Text color={theme.palette.white}>{student?.studentId}</Text>
        {!isError && (
          <Text color={theme.palette.white}>{userInfo?.department}</Text>
        )}
        {!isError && (
          <Text color={theme.palette.white}>{userInfo?.major1}</Text>
        )}
      </Flex.Column>
    </Flex.Column>
  );
};

export default UserSection;
