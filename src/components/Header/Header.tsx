import { Flex, Heading } from '@/components';
import { headerItems } from '@/constants/headerItems';
import { headerHeight } from '@/constants/layoutSize';
import { useTheme } from '@mui/material';
import { matchPath, useLocation } from 'react-router-dom';

const Header = ({ headerTitle }: { headerTitle?: string }) => {
  const location = useLocation();
  const title =
    headerTitle ??
    Object.entries(headerItems).find(([pattern]) =>
      matchPath(pattern, location.pathname),
    )?.[1];

  const theme = useTheme();
  // const toggleTheme = useThemeStore(state => state.toggleTheme);

  return (
    <Flex.Row
      height={`${headerHeight}px`}
      width="100%"
      backgroundColor={theme.palette.variant.default}
      align="center"
      justify="space-between"
      padding="1rem"
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        zIndex: 10,
      }}
    >
      <Flex.Row padding="0 1rem">
        <Heading as="h1">{title}</Heading>
      </Flex.Row>
      {/* 1차 배포 테마 변경 기능 삭제 */}
      {/* <Button
        label="테마 변경"
        variant="contained"
        color="blue"
        size="medium"
        onClick={toggleTheme}
        icon={ThemeIcon}
        iconPosition="end"
      /> */}
    </Flex.Row>
  );
};

export default Header;
