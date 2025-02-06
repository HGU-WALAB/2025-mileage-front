import { Color } from '@/types/style';
import { getColor } from '@/utils/getColor';
import { Button as MuiButton } from '@mui/material';
import { FunctionComponent, HTMLAttributes, SVGProps } from 'react';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'text' | 'outlined' | 'contained';
  disabled?: boolean;
  color?: Color;
  size?: 'small' | 'medium' | 'large' | 'full';
  isRound?: boolean;
  iconPosition?: 'start' | 'end';
  icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
  onClick?: () => void;
}

const Button = ({
  label,
  variant = 'contained',
  disabled = false,
  color = 'blue',
  size = 'small',
  isRound = false,
  iconPosition,
  icon: Icon,
  onClick = () => {},
}: Props) => {
  const { baseColor, hoverColor } = getColor(color);
  return (
    <MuiButton
      variant={variant}
      disabled={disabled}
      size={size === 'full' ? 'medium' : size}
      sx={{
        backgroundColor: variant === 'contained' ? baseColor : 'transparent',
        borderColor: variant === 'outlined' ? baseColor : 'transparent',
        '&:hover': {
          backgroundColor: variant === 'contained' ? hoverColor : 'transparent',
          borderColor: variant === 'outlined' ? hoverColor : 'transparent',
        },
        borderRadius: isRound ? '2.4rem' : '.2rem',
        width: size === 'full' ? '100%' : 'auto',
      }}
      startIcon={iconPosition === 'start' && Icon ? <Icon /> : null}
      endIcon={iconPosition === 'end' && Icon ? <Icon /> : null}
      onClick={onClick}
    >
      {label}
    </MuiButton>
  );
};

export default Button;
