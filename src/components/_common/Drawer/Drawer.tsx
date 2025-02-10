import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer as MuiDrawer,
  useTheme,
} from '@mui/material';

import { Flex } from '@/components';
import drawerItems from '@/constants/drawerItems';
import { drawerWidth, headerHeight } from '@/constants/layoutSize';
import { useDrawerStore } from '@/stores';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link, useLocation } from 'react-router-dom';

const Drawer = () => {
  const query = useLocation();
  const theme = useTheme();
  const { isDrawerOpen, toggleDrawer } = useDrawerStore();

  return (
    <>
      <MuiDrawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: theme.palette.variant.default,
            boxShadow:
              theme.palette.mode === 'light'
                ? '0px 4px 6px rgba(0, 0, 0, 0.1)'
                : '0px 4px 10px rgba(0, 0, 0, 0.5)',
          },
        }}
        variant="persistent"
        anchor="left"
        open={isDrawerOpen}
      >
        <Flex
          direction="row-reverse"
          height={`${headerHeight}px`}
          padding="1rem"
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Flex>
        <Divider />
        <List>
          {drawerItems.map(item => (
            <Link to={item.route}>
              <ListItem key={item.text} disablePadding>
                <ListItemButton selected={query.pathname === item.route}>
                  <ListItemIcon>
                    <item.icon />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{ fontSize: theme.typography.body1 }}
                  />
                </ListItemButton>
              </ListItem>
              <Divider />
            </Link>
          ))}
        </List>
      </MuiDrawer>
    </>
  );
};

export default Drawer;
