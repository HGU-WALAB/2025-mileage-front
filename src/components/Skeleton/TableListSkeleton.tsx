import { TableSkeleton } from '@/components';

const TableListSkeleton = () => {
  return (
    <>
      {[...Array(3)].map((_, index) => (
        <TableSkeleton key={index} index={index} />
      ))}
    </>
  );
};

export default TableListSkeleton;
