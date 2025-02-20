import {
  drawerWidth,
  globalHeight,
  headerHeight,
} from '@/constants/layoutSize';
import { styled } from '@mui/material/styles';

const Main = styled('main', { shouldForwardProp: prop => prop !== 'open' })<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  height: globalHeight,
  maxWidth: '80rem',
  margin: `1rem 1rem 0`,
  paddingTop: headerHeight,
  backgroundColor: theme.palette.background.default,
  overflowY: 'scroll',
  position: 'relative',
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        borderRadius: '.5rem',
        marginLeft: `${drawerWidth + 24}px`,
      },
    },
  ],
}));

export default Main;
