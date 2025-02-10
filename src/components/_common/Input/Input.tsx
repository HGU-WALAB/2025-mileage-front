import { InputVariant } from '@/types/style';
import TextField from '@mui/material/TextField';

interface Props {
  label: string;
  variant?: InputVariant;
}

const Input = ({ label, variant = 'outlined' }: Props) => {
  return <TextField label={label} variant={variant} />;
};

export default Input;
