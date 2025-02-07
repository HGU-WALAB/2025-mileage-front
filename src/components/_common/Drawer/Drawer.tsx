import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer as MuiDrawer,
} from '@mui/material';

import { Flex } from '@/components';
import { drawerWidth, headerHeight } from '@/constants/layoutSize';
import { ROUTE_PATH } from '@/constants/routePath';
import { useDrawerStore } from '@/stores';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Link } from 'react-router-dom';

const Drawer = () => {
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
          },
        }}
        variant="persistent"
        anchor="left"
        open={isDrawerOpen}
      >
        <Flex.Row height={`${headerHeight}px`} padding="1rem">
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Flex.Row>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <Link to={ROUTE_PATH.mileageList}>
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <Link to={ROUTE_PATH.landing}>
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </MuiDrawer>
    </>
  );
};

export default Drawer;
