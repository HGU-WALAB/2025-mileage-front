import { LogoutIcon } from '@/assets';
import { Text } from '@/components';
import Flex from '@/components/_common/Flex/Flex';
import { ROUTE_PATH } from '@/constants/routePath';
import { getOpacityColor } from '@/utils/getOpacityColor';
import { styled, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { usePostLogoutMutation } from '@/pages/LoginPage/hooks/usePostLogoutMutation';

const LogoutSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { mutate: logout } = usePostLogoutMutation();

  const handleLogout = () => {
    logout();
    navigate(ROUTE_PATH.login);
  };

  return (
    <S.LogoutButton
      gap="1rem"
      onClick={handleLogout}
      width="100%"
      justify="center"
      padding=".5rem"
      pointer
    >
      <LogoutIcon />
      <Text color={theme.palette.white}>Logout</Text>
    </S.LogoutButton>
  );
};

export default LogoutSection;

const S = {
  Wrapper: styled(Flex)`
    margin-bottom: 1rem;
  `,
  LogoutButton: styled(Flex.Row)`
    border-radius: 0.5rem;

    &:hover,
    &:active {
      background-color: ${({ theme }) =>
        getOpacityColor(theme.palette.white, 0.1)};
    }
  `,
};
