import { LogoutIcon } from '@/assets';
import Flex from '@/components/_common/Flex/Flex';
import Text from '@/components/_common/Text/Text';
import { ROUTE_PATH } from '@/constants/routePath';
import { useAuthStore } from '@/stores';
import { getOpacityColor } from '@/utils/getOpacityColor';
import { styled, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LogoutSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const { logout } = useAuthStore();
  const handleLogout = () => {
    logout();
    navigate(ROUTE_PATH.login);
  };

  return (
    <S.Wrapper direction="column-reverse" width="100%" align="center">
      <S.LogoutButton
        gap="1rem"
        onClick={handleLogout}
        width="100%"
        justify="center"
        padding=".5rem"
      >
        <LogoutIcon />
        <Text color={theme.palette.white}>Logout</Text>
      </S.LogoutButton>
    </S.Wrapper>
  );
};

export default LogoutSection;

const S = {
  Wrapper: styled(Flex)`
    flex-grow: 1;
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
