import { Color } from '@/types/style';
import { getColor } from '@/utils/getColor';
import { Button as MuiButton, useTheme } from '@mui/material';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  value?: string;
  selected?: boolean;
  variant?: 'text' | 'outlined' | 'contained';
  disabled?: boolean;
  color?: Color;
  size?: 'small' | 'medium' | 'large';
  isRound?: boolean;
}

const ToggleButton = ({
  label,
  value = '',
  variant = 'contained',
  disabled = false,
  selected = false,
  color = 'blue',
  size = 'small',
  isRound = false,
  ...props
}: Props) => {
  const theme = useTheme();
  const { baseColor, hoverColor } = getColor(color);

  return (
    <MuiButton
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
              ? theme.palette.white
              : 'transparent',

        borderColor: variant === 'outlined' ? baseColor : 'transparent',
        borderRadius: isRound ? '2.4rem' : '.2rem',
      }}
      {...props}
    >
      {label}
    </MuiButton>
  );
};

export default ToggleButton;
