import {
  drawerWidth,
  globalHeight,
  globalMobileHeight,
} from '@/constants/layoutSize';
import { styled } from '@mui/material/styles';

const Main = styled('main', { shouldForwardProp: prop => prop !== 'open' })<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  height: globalMobileHeight,
  maxWidth: `100%`,
  margin: `.5rem`,
  backgroundColor: theme.palette.background.default,
  overflowY: 'scroll',
  position: 'relative',
  borderRadius: '.5rem',
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        height: globalHeight,
        maxWidth: `calc(100% - ${drawerWidth + 24}px)`,
        marginLeft: `${drawerWidth + 16}px`,
      },
    },
  ],
}));

export default Main;
