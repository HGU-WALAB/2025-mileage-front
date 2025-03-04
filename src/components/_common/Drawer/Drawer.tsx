import { Drawer as MuiDrawer, useTheme } from '@mui/material';

import { Flex } from '@/components';
import { drawerWidth, globalHeight } from '@/constants/layoutSize';
import { useDrawerStore } from '@/stores';
import { getOpacityColor } from '@/utils/getOpacityColor';

import LogoSection from './LogoSection';
import LogoutSection from './LogoutSection';
import MenuSection from './MenuSection';
import UserSection from './UserSection';

const Drawer = () => {
  const theme = useTheme();
  const { isDrawerOpen } = useDrawerStore();

  return (
    <>
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

          <UserSection />

          <MenuSection />

          <LogoutSection />
        </Flex.Column>
      </MuiDrawer>
    </>
  );
};

export default Drawer;
