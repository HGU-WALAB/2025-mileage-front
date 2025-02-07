import { Flex } from '@/components';
import useDrawerStore from '@/stores/useDrawerStore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { IconButton } from '@mui/material';

const Header = () => {
  const { isDrawerOpen, toggleDrawer } = useDrawerStore();

  return (
    <Flex.Row height="64px" backgroundColor="yellow">
      <Flex.Row backgroundColor="red" padding="1rem" align="center" justify="center">
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
    </Flex.Row>
  );
};

export default Header;
