import { EmptyBoxImg } from '@/assets';
import { Flex, Heading } from '@/components';
import { ERROR_MESSAGES } from '@/constants/errorMessage';
import { useTheme } from '@mui/material';

const ErrorPage = () => {
  const theme = useTheme();
  return (
    <Flex.Column
      width="100%"
      height="400px"
      gap="1rem"
      justify="center"
      align="center"
    >
      <EmptyBoxImg />
      <Heading
        as="h2"
        style={{ fontSize: '1.5rem', color: theme.palette.grey300 }}
      >
        {ERROR_MESSAGES.default}
      </Heading>
    </Flex.Column>
  );
};

export default ErrorPage;
