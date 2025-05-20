import { ArrowLeftIcon } from '@/assets';
import { Button } from '@/components';
import { useNavigate } from 'react-router-dom';

interface BackButtonProps {
  label?: string;
  to?: string;
}

export const BackButton = ({ label = '뒤로가기', to }: BackButtonProps) => {
  const navigate = useNavigate();

  return (
    <Button
      label={label}
      icon={ArrowLeftIcon}
      iconPosition="start"
      variant="outlined"
      size="medium"
      onClick={() => {
        if (to) navigate(to);
        else navigate(-1);
      }}
    />
  );
};
