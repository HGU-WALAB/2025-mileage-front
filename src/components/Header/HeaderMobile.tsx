import { LogoutIcon } from '@/assets';
import { Flex, Heading } from '@/components';
import { headerItems } from '@/constants/headerItems';
import { headerHeight } from '@/constants/layoutSize';
import { ROUTE_PATH } from '@/constants/routePath';
import { getOpacityColor } from '@/utils/getOpacityColor';
import { styled, useTheme } from '@mui/material';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';

import { usePostLogoutMutation } from '@auth/hooks/usePostLogoutMutation';

const HeaderMobile = ({ headerTitle }: { headerTitle?: string }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const location = useLocation();
  const title =
    headerTitle ??
    Object.entries(headerItems).find(([pattern]) =>
      matchPath(pattern, location.pathname),
    )?.[1];

  const { mutate: logout } = usePostLogoutMutation();
  const handleLogout = () => {
    logout();
    navigate(ROUTE_PATH.login);
  };

  return (
    <S.Container
      height={`${headerHeight}px`}
      width="100%"
      align="center"
      justify="space-between"
      padding="1rem"
    >
      <Heading
        as="h3"
        style={{
          color: theme.palette.white,
          lineHeight: 1,
        }}
      >
        {title}
      </Heading>
      <LogoutIcon onClick={handleLogout} />
    </S.Container>
  );
};

export default HeaderMobile;

const S = {
  Container: styled(Flex.Row)`
    backdrop-filter: blur(1.875rem);
    background-color: ${({ theme }) =>
      getOpacityColor(theme.palette.white, 0.1)};
    left: 0;
    position: sticky;
    top: 0;
    z-index: 10;
  `,
};
