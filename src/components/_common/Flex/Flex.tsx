import { RESPONSIVE_MAX_WIDTH } from '@/constants/system';
import { useMediaQuery } from '@mui/material';
import { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: string;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  backgroundColor?: string;
  responsive?: boolean;
}

const Flex = ({
  children,
  direction = 'row',
  justify,
  align,
  wrap,
  gap,
  width,
  height,
  padding,
  margin,
  backgroundColor,
  responsive,
  style,
  ...props
}: Props) => {
  const isMobile = useMediaQuery(RESPONSIVE_MAX_WIDTH);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: responsive && isMobile ? 'column' : direction,
        justifyContent: justify,
        alignItems: align,
        flexWrap: wrap,
        gap,
        width,
        height,
        padding,
        margin,
        backgroundColor,
        boxSizing: 'border-box',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Flex;

Flex.Row = (props: Props) => <Flex {...props} direction="row" />;
Flex.Column = (props: Props) => <Flex {...props} direction="column" />;
