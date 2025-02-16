import { Flex, Heading, Text } from '@/components';
import { useAuthStore } from '@/stores';
import { getOpacityColor } from '@/utils/getOpacityColor';
import { styled, useTheme } from '@mui/material';

const UserBox = () => {
  const { student } = useAuthStore();
  const theme = useTheme();

  return (
    <Flex.Column
      align="center"
      gap=".5rem"
      backgroundColor={getOpacityColor(theme.palette.white, 0.3)}
      width="100%"
      padding="1rem 0"
      style={{
        borderRadius: '.4rem',
      }}
    >
      <div
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: theme.palette.white,
          borderRadius: '50%',
        }}
      />
      <Flex.Column align="center">
        <Heading as="h3" color={theme.palette.white}>
          {student?.studentName}
        </Heading>
        <Text color="white">{student?.studentId}</Text>
      </Flex.Column>
      <S.MyPageButton>프로필 설정</S.MyPageButton>
    </Flex.Column>
  );
};

export default UserBox;

const S = {
  MyPageButton: styled('div')`
    background-color: rgb(243 243 243 / 10%);
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.palette.white};
    padding: 0.25rem 1rem;
  `,
};
