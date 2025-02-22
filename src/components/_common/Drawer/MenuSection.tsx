import drawerItems from '@/constants/drawerItems';
import { getOpacityColor } from '@/utils/getOpacityColor';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  useTheme,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const MenuSection = () => {
  const theme = useTheme();
  const location = useLocation();

  return (
    <List
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      {drawerItems.map(item => (
        <Link to={item.route} key={item.text}>
          <ListItem
            disablePadding
            style={{ color: theme.palette.white, height: '100%' }}
          >
            <ListItemButton
              selected={location.pathname === item.route}
              sx={{
                borderRadius: '.5rem',
                '&:hover': {
                  backgroundColor: getOpacityColor(theme.palette.white, 0.2),
                },
                '&.Mui-selected': {
                  backgroundColor: getOpacityColor(theme.palette.white, 0.2),
                  boxShadow: `0 .25rem 1.25rem ${getOpacityColor(theme.palette.black, 0.2)}`,
                  '&:hover': {
                    backgroundColor: getOpacityColor(theme.palette.white, 0.4),
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
            <S.SelectedMark isSelected={location.pathname === item.route} />
          </ListItem>
        </Link>
      ))}
    </List>
  );
};

export default MenuSection;

const S = {
  SelectedMark: styled('div')<{ isSelected: boolean }>`
    background-color: ${({ theme }) => theme.palette.white};
    border-radius: 0.5rem;
    height: 100%;
    margin-left: 0.5rem;
    visibility: ${({ isSelected }) => (isSelected ? 'block' : 'hidden')};
    width: 10px;
  `,
};
