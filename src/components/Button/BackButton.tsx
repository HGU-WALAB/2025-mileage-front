import { ArrowLeftIcon } from '@/assets';
import { Button } from '@/components';
import { Size } from '@/types/style';
import { useNavigate } from 'react-router-dom';

interface BackButtonProps {
  label?: string;
  to?: string;
  size?: Size;
}

export const BackButton = ({
  label = '뒤로가기',
  to,
  size,
}: BackButtonProps) => {
  const navigate = useNavigate();

  return (
    <Button
      label={label}
      icon={ArrowLeftIcon}
      iconPosition="start"
      variant="outlined"
      size={size ? size : 'medium'}
      onClick={() => {
        if (to) navigate(to);
        else navigate(-1);
      }}
    />
  );
};
