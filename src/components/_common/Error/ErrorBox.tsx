import { EmptyBoxImg } from '@/assets';
import { Flex, Heading } from '@/components';
import { useTheme } from '@mui/material';

const ErrorBox = () => {
  const theme = useTheme();
  return (
    <Flex.Column gap=".5rem" align="center">
      <EmptyBoxImg width={75} height={75} />
      <Heading
        as="h2"
        style={{ fontSize: '1.5rem', color: theme.palette.grey300 }}
      >
        헉 에러 발생 .. !
      </Heading>
    </Flex.Column>
  );
};

export default ErrorBox;
