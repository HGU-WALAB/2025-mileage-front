import { ButtonVariant, Color, Size } from '@/types/style';
import { getColor } from '@/utils/getColor';
import { Button as MuiButton, useTheme } from '@mui/material';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  value?: string;
  selected?: boolean;
  variant?: ButtonVariant;
  disabled?: boolean;
  color?: Color;
  size?: Size;
  isRound?: boolean;
}

const ToggleButton = ({
  label,
  value = '',
  variant = 'outlined',
  disabled = false,
  selected = false,
  color = 'blue',
  size = 'small',
  isRound = false,
  ...props
}: Props) => {
  const theme = useTheme();
  const { lightColor, baseColor, hoverColor } = getColor(color);

  return (
    <MuiButton
      type="button"
      variant={variant}
      value={value}
      disabled={disabled}
      size={size}
      sx={{
        backgroundColor:
          variant === 'contained'
            ? selected
              ? hoverColor
              : baseColor
            : selected
              ? baseColor
              : 'transparent',
        color:
          variant === 'outlined' && selected ? theme.palette.white : 'none',
        borderColor: variant === 'outlined' ? baseColor : 'transparent',
        borderRadius: isRound ? '2.4rem' : '.2rem',
        height: size === 'small' ? '30px' : size === 'medium' ? '36px' : '42px',
        boxShadow: 'none',
        transition: 'none',

        '&:hover': {
          backgroundColor:
            variant === 'contained'
              ? hoverColor
              : selected
                ? baseColor
                : lightColor,
          borderColor: variant === 'outlined' ? hoverColor : 'transparent',
        },
      }}
      {...props}
    >
      {label}
    </MuiButton>
  );
};

export default ToggleButton;
