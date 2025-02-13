import { Size } from '@/types/style';
import { Dialog, DialogContent } from '@mui/material';
import { HTMLAttributes } from 'react';
import { createPortal } from 'react-dom';

import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';

interface Props extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  toggleModal: () => void;
  trigger: React.ReactNode;
  size?: Size;
}

const Modal = ({
  open,
  toggleModal,
  trigger,
  size,
  children,
  ...props
}: Props) => {
  return (
    <>
      <div onClick={toggleModal}>{trigger}</div>
      {open &&
        createPortal(
          <Dialog
            open={open}
            onClose={toggleModal}
            fullWidth
            maxWidth={size === 'large' ? 'md' : size === 'medium' ? 'sm' : 'xs'}
          >
            <DialogContent {...props}>{children}</DialogContent>
          </Dialog>,
          document.body,
        )}
    </>
  );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
