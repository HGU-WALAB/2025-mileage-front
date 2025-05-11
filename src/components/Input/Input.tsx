import { InputVariant, Size } from '@/types/style';
import TextField, { TextFieldProps } from '@mui/material/TextField';

interface Props extends Omit<TextFieldProps, 'variant'> {
  size?: Exclude<Size, 'large'>;
  variant?: InputVariant;
}

const Input = ({
  label = '',
  size = 'small',
  variant = 'outlined',
  fullWidth = false,
  ...props
}: Props) => {
  return (
    <TextField
      label={label}
      size={size}
      variant={variant}
      fullWidth={fullWidth}
      {...props}
    />
  );
};

export default Input;
