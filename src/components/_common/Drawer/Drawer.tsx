import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer as MuiDrawer,
  useTheme,
} from '@mui/material';

import { Flex, Heading } from '@/components';
import { UserBox } from '@/components/User';
import drawerItems from '@/constants/drawerItems';
import { drawerWidth, globalHeight } from '@/constants/layoutSize';
import { useDrawerStore } from '@/stores';
import { getOpacityColor } from '@/utils/getOpacityColor';
import { Link, useLocation } from 'react-router-dom';

const Drawer = () => {
  const query = useLocation();
  const theme = useTheme();
  const { isDrawerOpen } = useDrawerStore();

  return (
    <>
      <MuiDrawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            top: '1rem',
            left: '1rem',
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
        <Flex.Column align="center" padding="1rem" gap="1rem">
          <Heading as="h2" color={theme.palette.white}>
            CSEE MILEAGE
          </Heading>

          <UserBox />

          <List
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '.5rem',
              width: '100%',
            }}
          >
            {drawerItems.map(item => (
              <Link to={item.route} key={item.text}>
                <ListItem disablePadding style={{ color: theme.palette.white }}>
                  <ListItemButton
                    selected={query.pathname === item.route}
                    sx={{
                      borderRadius: '.5rem',
                      '&:hover': {
                        backgroundColor: getOpacityColor(
                          theme.palette.white,
                          0.2,
                        ),
                      },
                      '&.Mui-selected': {
                        fontWeight: 'bold',
                        backgroundColor: getOpacityColor(
                          theme.palette.white,
                          0.2,
                        ),
                        '&:hover': {
                          backgroundColor: getOpacityColor(
                            theme.palette.white,
                            0.4,
                          ),
                        },
                      },
                    }}
                  >
                    <ListItemIcon style={{ minWidth: '2.5rem' }}>
                      <item.icon style={{ color: theme.palette.white }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      sx={{ fontSize: theme.typography.body1 }}
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Flex.Column>
      </MuiDrawer>
    </>
  );
};

export default Drawer;
