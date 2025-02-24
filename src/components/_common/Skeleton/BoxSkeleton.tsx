import { Skeleton } from '@mui/material';

const BoxSkeleton = ({ height = 200 }: { height?: number }) => {
  return (
    <Skeleton
      variant="rectangular"
      width="100%"
      height={height}
      style={{ borderRadius: '.5rem' }}
    />
  );
};

export default BoxSkeleton;
