import { EmptyBoxImg } from '@/assets';
import { Flex, Heading } from '@/components';
import { useTheme } from '@mui/material';

export const EmptyTable = () => {
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
        등록된 상장이 없어요
      </Heading>
    </Flex.Column>
  );
};
