import { Flex } from '@/components';
import { Position } from '@/types/style';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  position?: Position;
}

const ModalBody = ({ position = 'start', children, ...props }: Props) => {
  return (
    <Flex.Column
      align={
        position === 'start'
          ? 'flex-start'
          : position === 'end'
            ? 'flex-end'
            : position
      }
      {...props}
    >
      {children}
    </Flex.Column>
  );
};

export default ModalBody;
