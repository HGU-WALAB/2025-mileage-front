import { Flex } from '@/components';
import { Position } from '@/types/style';
import { DialogActions } from '@mui/material';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  position?: Position;
}

const ModalFooter = ({ position = 'end', children, ...props }: Props) => {
  return (
    <DialogActions>
      <Flex.Row
        width="100%"
        justify={
          position === 'start'
            ? 'flex-start'
            : position === 'end'
              ? 'flex-end'
              : position
        }
        {...props}
      >
        {children}
      </Flex.Row>
    </DialogActions>
  );
};

export default ModalFooter;
