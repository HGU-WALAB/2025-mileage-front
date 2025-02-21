import { Size } from '@/types/style';
import { Dialog, DialogContent, IconButton } from '@mui/material';
import { HTMLAttributes } from 'react';
import { createPortal } from 'react-dom';

import { CloseIcon } from '@/assets';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';

interface Props extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  toggleModal: () => void;
  trigger: React.ReactNode;
  size?: Size;
  hasCloseButton?: boolean;
}

const Modal = ({
  open,
  toggleModal,
  trigger,
  size,
  hasCloseButton = false,
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
            <DialogContent {...props}>
              {children}

              {hasCloseButton && (
                <IconButton
                  aria-label="close"
                  onClick={toggleModal}
                  sx={theme => ({
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: theme.palette.grey[500],
                  })}
                >
                  <CloseIcon />
                </IconButton>
              )}
            </DialogContent>
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
