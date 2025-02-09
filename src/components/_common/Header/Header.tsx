import { Flex } from '@/components';
import { headerHeight } from '@/constants/layoutSize';
import { useDrawerStore, useThemeStore } from '@/stores';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button, IconButton, useTheme } from '@mui/material';

const Header = () => {
  const theme = useTheme();
  const toggleTheme = useThemeStore(state => state.toggleTheme);
  const { isDrawerOpen, toggleDrawer } = useDrawerStore();

  return (
    <Flex.Row
      height={`${headerHeight}px`}
      backgroundColor={theme.palette.variant.default}
      justify="space-between"
      style={{
        position: 'fixed',
        top: 0,
        width: '100vw',
        zIndex: 10,
        borderBottom: `1px solid ${theme.palette.variant.grey}`,
      }}
    >
      <Flex.Row padding="1rem" align="center" justify="center">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          edge="end"
          sx={[
            {
              mr: 2,
            },
            isDrawerOpen && { display: 'none' },
          ]}
        >
          <ChevronRightIcon />
        </IconButton>
      </Flex.Row>

      <Button
        variant="contained"
        color="primary"
        size="medium"
        onClick={toggleTheme}
      >
        테마 변경
      </Button>
    </Flex.Row>
  );
};

export default Header;
