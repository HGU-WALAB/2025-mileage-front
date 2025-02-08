import { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'column';
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
  ...props
}: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: direction,
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
        ...props.style,
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
