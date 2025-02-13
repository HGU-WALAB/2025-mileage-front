import { useState } from 'react';

const useOpenModal = (initState: boolean = false) => {
  const [open, setOpen] = useState(initState);

  const toggleModal = () => {
    setOpen(prev => !prev);
  };

  return { open, toggleModal };
};

export default useOpenModal;
