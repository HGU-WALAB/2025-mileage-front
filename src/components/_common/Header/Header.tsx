import { Button, Flex, Heading } from '@/components';
import { headerHeight } from '@/constants/layoutSize';
import { useThemeStore } from '@/stores';
import { useTheme } from '@mui/material';

const Header = () => {
  const title = '마일리지 조회';
  const theme = useTheme();
  const toggleTheme = useThemeStore(state => state.toggleTheme);
  // const { isDrawerOpen, toggleDrawer } = useDrawerStore();

  return (
    <Flex.Row
      height={`${headerHeight}px`}
      width="100%"
      backgroundColor={theme.palette.background.default}
      align="center"
      justify="space-between"
      padding="1rem"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 10,
      }}
    >
      {/* <Flex.Row padding="1rem" align="center" justify="center">
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
          <RightArrowIcon />
        </IconButton>
      </Flex.Row> */}
      <Flex.Row padding="1rem">
        <Heading as="h1">{title}</Heading>
      </Flex.Row>
      <Button
        label="테마 변경"
        variant="contained"
        color="blue"
        size="medium"
        onClick={toggleTheme}
      />
    </Flex.Row>
  );
};

export default Header;
