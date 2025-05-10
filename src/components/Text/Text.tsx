import { ElementType, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLSpanElement> {
  padding?: string;
  margin?: string;
  color?: string;
  bold?: boolean;
  as?: ElementType;
}

const Text = ({
  children,
  padding,
  margin,
  color,
  bold = false,
  as: Tag = 'p',
  ...props
}: Props) => {
  return (
    <Tag
      style={{
        padding,
        margin,
        color,
        fontWeight: bold ? 'bold' : 'normal',
      }}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Text;
