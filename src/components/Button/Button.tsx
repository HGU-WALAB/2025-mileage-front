import { ButtonVariant, Color, Size } from '@/types/style';
import { getColor } from '@/utils/getColor';
import { Button as MuiButton } from '@mui/material';
import { ButtonHTMLAttributes, FunctionComponent, SVGProps } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  color?: Color;
  size?: Size | 'full';
  isRound?: boolean;
  iconPosition?: 'start' | 'end';
  icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
}

const Button = ({
  label,
  variant = 'contained',
  disabled = false,
  color = 'blue',
  size = 'small',
  isRound = false,
  iconPosition = 'start',
  icon: Icon,
  children,
  ...props
}: Props) => {
  const { baseColor, lightColor, hoverColor } = getColor(color);

  return (
    <MuiButton
      variant={variant}
      disabled={disabled}
      size={size === 'full' ? 'medium' : size}
      sx={{
        backgroundColor: variant === 'contained' ? baseColor : 'transparent',
        borderColor: variant === 'outlined' ? baseColor : 'transparent',
        '&:hover': {
          backgroundColor: variant === 'contained' ? hoverColor : lightColor,
          borderColor: variant === 'outlined' ? hoverColor : 'transparent',
        },
        borderRadius: isRound ? '2.4rem' : '.5rem',
        width: size === 'full' ? '100%' : 'auto',
        height: size === 'small' ? '30px' : size === 'medium' ? '36px' : '42px',
      }}
      startIcon={iconPosition === 'start' && Icon ? <Icon /> : null}
      endIcon={iconPosition === 'end' && Icon ? <Icon /> : null}
      {...props}
    >
      {label}
      {children}
    </MuiButton>
  );
};

export default Button;
