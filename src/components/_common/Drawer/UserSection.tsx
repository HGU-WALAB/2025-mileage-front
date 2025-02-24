import { Flex, Heading, Text } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import { useGetUserInfoQuery } from '@/hooks/queries';
import { useAuthStore } from '@/stores';
import { boxShadow } from '@/styles/common';
import { getOpacityColor } from '@/utils/getOpacityColor';
import { styled, useTheme } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const UserSection = () => {
  const { student } = useAuthStore();
  const { data: userInfo } = useGetUserInfoQuery(student.studentId);

  const theme = useTheme();
  const location = useLocation();

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
        <Text color={theme.palette.white}>{userInfo?.department}</Text>
        <Text color={theme.palette.white}>{userInfo?.major1}</Text>
      </Flex.Column>
      <Link to={ROUTE_PATH.myPage}>
        <S.MyPageButton isSelected={location.pathname === ROUTE_PATH.myPage}>
          프로필 설정
        </S.MyPageButton>
      </Link>
    </Flex.Column>
  );
};

export default UserSection;

const S = {
  MyPageButton: styled('div')<{ isSelected: boolean }>`
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.palette.white};
    outline: 1px solid ${({ theme }) => theme.palette.white};
    padding: 0.25rem 1rem;

    ${({ isSelected, theme }) =>
      isSelected &&
      `
        background-color: ${theme.palette.primary.main};
        outline: none;
        ${boxShadow};
      `}

    &:hover,
      &:active {
      background-color: ${({ theme }) =>
        getOpacityColor(theme.palette.white, 0.3)};
    }
  `,
};
