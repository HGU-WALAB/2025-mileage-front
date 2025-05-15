import { LogoIcon } from '@/assets';
import { Flex, Heading } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import { useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const LogoSection = () => {
  const theme = useTheme();
  return (
    <Link to={ROUTE_PATH.dashboard}>
      <Flex.Row gap="0.5rem" margin="0 0 1rem" align="center" pointer>
        <LogoIcon />
        <Heading as="h3" color={theme.palette.white}>
          CSEE Milestone
        </Heading>
      </Flex.Row>
    </Link>
  );
};

export default LogoSection;
