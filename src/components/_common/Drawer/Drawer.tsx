import { Button, Flex } from '@/components';
import { drawerWidth, globalHeight } from '@/constants/layoutSize';
import { ROUTE_PATH } from '@/constants/routePath';
import { useScholarshipDuration } from '@/hooks';
import { useDrawerStore } from '@/stores';
import { getOpacityColor } from '@/utils/getOpacityColor';
import { Drawer as MuiDrawer, useTheme } from '@mui/material';
import { ErrorBoundary } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';

import IsApplyCheckSection from './IsApplyCheckSection';
import LogoSection from './LogoSection';
import LogoutSection from './LogoutSection';
import MenuSection from './MenuSection';
import UserSection from './UserSection';

const Drawer = () => {
  const theme = useTheme();
  const { isDrawerOpen } = useDrawerStore();

  const { isScholarshipDuration } = useScholarshipDuration();

  return (
    <MuiDrawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          top: '.5rem',
          left: '.5rem',
          height: globalHeight,
          width: drawerWidth,
          boxSizing: 'border-box',
          backdropFilter: `blur(10px)`,
          backgroundColor: getOpacityColor(theme.palette.white, 0.1),
          borderRadius: '.5rem',
          boxShadow:
            theme.palette.mode === 'light'
              ? `0px 4px 6px ${getOpacityColor(theme.palette.black, 0.1)}`
              : `0px 4px 10px ${getOpacityColor(theme.palette.black, 0.5)}`,
        },
      }}
      variant="persistent"
      anchor="left"
      open={isDrawerOpen}
    >
      <Flex.Column align="center" padding="1rem" gap="1rem" height="100%">
        <LogoSection />

        <ErrorBoundary fallback={<ReLoginSection />}>
          <UserSection />
        </ErrorBoundary>

        <MenuSection />

        <Flex.Column
          justify="flex-end"
          width="100%"
          gap="1rem"
          style={{ flexGrow: 1 }}
          margin="1rem 0"
        >
          {isScholarshipDuration && <IsApplyCheckSection />}
          <LogoutSection />
        </Flex.Column>
      </Flex.Column>
    </MuiDrawer>
  );
};

export default Drawer;

const ReLoginSection = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Flex.Row
      align="center"
      justify="center"
      gap=".5rem"
      backgroundColor={getOpacityColor(theme.palette.white, 0.1)}
      width="100%"
      padding="1rem"
      style={{
        border: `0.5px solid ${getOpacityColor(theme.palette.white, 0.7)}`,
        borderRadius: '.5rem',
      }}
    >
      <Button
        label="히즈넷 로그인하러 가기"
        onClick={() => navigate(ROUTE_PATH.login)}
      />
    </Flex.Row>
  );
};
