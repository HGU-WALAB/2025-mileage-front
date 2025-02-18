import { EmptyBoxImg } from '@/assets';
import { Button, Flex, Heading } from '@/components';
import { useTheme } from '@mui/material';
import { FallbackProps } from 'react-error-boundary';

const PageErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
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
        style={{ fontSize: '2rem', color: theme.palette.grey300 }}
      >
        헉 {error.status} 에러 발생 .. !
      </Heading>
      <Button label="다시 시도하기" onClick={resetErrorBoundary} />
    </Flex.Column>
  );
};

export default PageErrorFallback;
