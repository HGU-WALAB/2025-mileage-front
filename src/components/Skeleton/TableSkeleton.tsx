import { BoxSkeleton, Flex } from '@/components';
import { Skeleton } from '@mui/material';

const TableSkeleton = ({ index = 1 }: { index?: number }) => {
  return (
    <Flex.Column padding="1rem 0" key={index}>
      <Skeleton variant="text" width="20%" height={50} />
      <BoxSkeleton height={200} />
    </Flex.Column>
  );
};

export default TableSkeleton;
