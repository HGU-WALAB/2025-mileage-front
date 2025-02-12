import { typography } from '@/styles/typography';
import { ElementType, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLSpanElement> {
  padding?: string;
  margin?: string;
  as?: ElementType;
}

const Text = ({
  children,
  padding,
  margin,
  as: Tag = 'span',
  ...props
}: Props) => {
  return (
    <Tag style={{ padding, margin, ...typography.body1 }} {...props}>
      {children}
    </Tag>
  );
};

export default Text;
