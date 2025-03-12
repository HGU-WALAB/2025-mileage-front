import { LogoIcon } from '@/assets';
import { Flex, Heading } from '@/components';
import { getErrorMessage } from '@/utils/getErrorMessage';
import { useTheme } from '@mui/material';

const NotFoundPage = () => {
  const theme = useTheme();
  return (
    <Flex.Column
      width="100%"
      height="600px"
      gap="2rem"
      justify="center"
      align="center"
    >
      <LogoIcon width={100} height={100} />
      <Heading
        as="h2"
        style={{ fontSize: '1.5rem', color: theme.palette.grey400 }}
      >
        {getErrorMessage('404')}
      </Heading>
    </Flex.Column>
  );
};

export default NotFoundPage;
