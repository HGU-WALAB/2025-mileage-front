import { drawerWidth, globalHeight } from '@/constants/layoutSize';
import { styled } from '@mui/material/styles';

const Main = styled('main', { shouldForwardProp: prop => prop !== 'open' })<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  height: globalHeight,
  maxWidth: `calc(100% - ${drawerWidth + 24}px)`,
  margin: `.5rem 0 0`,
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
        marginLeft: `${drawerWidth + 8}px`,
      },
    },
  ],
}));

export default Main;
