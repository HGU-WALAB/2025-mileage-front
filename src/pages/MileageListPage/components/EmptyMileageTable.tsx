import { EmptyBoxImg } from '@/assets';
import { Flex, Heading } from '@/components';
import { useTheme } from '@mui/material';

export const EmptyMileageTable = () => {
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
      <Heading as="h2" style={{ color: theme.palette.grey300 }}>
        마일리지 정보가 없어요
      </Heading>
    </Flex.Column>
  );
};
