import { Flex, Heading } from '@/components';
import { Position } from '@/types/style';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  position?: Position;
}

const ModalHeader = ({ position = 'start', children, ...props }: Props) => {
  return (
    <Flex.Row
      justify={
        position === 'start'
          ? 'flex-start'
          : position === 'end'
            ? 'flex-end'
            : position
      }
      {...props}
    >
      <Heading as={'h2'}>{children}</Heading>
    </Flex.Row>
  );
};

export default ModalHeader;
