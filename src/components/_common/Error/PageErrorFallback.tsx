import { EmptyBoxImg } from '@/assets';
import { AuthErrorFallback, Button, Flex, Heading } from '@/components';
import { getErrorMessage } from '@/utils/getErrorMessage';
import { useTheme } from '@mui/material';
import { FallbackProps } from 'react-error-boundary';

const PageErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const theme = useTheme();

  return (
    <>
      {error.response?.status === 401 && (
        <AuthErrorFallback resetErrorBoundary={resetErrorBoundary} />
      )}
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
          style={{ fontSize: '2rem', color: theme.palette.grey300 }}
        >
          {getErrorMessage(error.status)}
        </Heading>
        <Button label="다시 시도하기" onClick={resetErrorBoundary} />
      </Flex.Column>
    </>
  );
};

export default PageErrorFallback;
