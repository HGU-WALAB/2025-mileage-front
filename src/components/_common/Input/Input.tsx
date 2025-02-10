import { InputVariant, Size } from '@/types/style';
import TextField, { TextFieldProps } from '@mui/material/TextField';

interface Props extends Omit<TextFieldProps, 'variant'> {
  label: string;
  size?: Exclude<Size, 'large'>;
  variant?: InputVariant;
}

const Input = ({
  label,
  size = 'small',
  variant = 'outlined',
  ...props
}: Props) => {
  return <TextField label={label} size={size} variant={variant} {...props} />;
};

export default Input;
