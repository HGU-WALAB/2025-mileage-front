import { InputVariant, Size } from '@/types/style';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { forwardRef } from 'react';

interface Props extends Omit<TextFieldProps, 'variant'> {
  size?: Exclude<Size, 'large'>;
  variant?: InputVariant;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      label = '',
      size = 'small',
      variant = 'outlined',
      fullWidth = false,
      ...props
    },
    ref,
  ) => {
    return (
      <TextField
        label={label}
        size={size}
        variant={variant}
        fullWidth={fullWidth}
        inputRef={ref}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';
