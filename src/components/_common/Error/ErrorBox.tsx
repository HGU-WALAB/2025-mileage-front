import { EmptyBoxImg } from '@/assets';
import { Flex, Heading } from '@/components';
import { getErrorMessage } from '@/utils/getErrorMessage';
import { useTheme } from '@mui/material';
import { AxiosError } from 'axios';

const ErrorBox = ({ error }: { error: AxiosError }) => {
  const theme = useTheme();
  return (
    <Flex.Column gap="1rem" align="center">
      <EmptyBoxImg width={75} height={75} />
      <Heading
        as="h2"
        style={{ fontSize: '1rem', color: theme.palette.grey300 }}
      >
        {getErrorMessage(String(error.response?.status))}
      </Heading>
    </Flex.Column>
  );
};

export default ErrorBox;
