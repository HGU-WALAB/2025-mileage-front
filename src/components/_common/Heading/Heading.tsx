import { typography } from '@/styles/typography';
import { css } from '@emotion/react';
import { ElementType, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  padding?: string;
  margin?: string;
  as?: ElementType;
}

const Heading = ({ children, padding, margin, as: Tag = 'div' }: Props) => {
  const typographyStyles = (typography[Tag as keyof typeof typography] ||
    typography.body1) as object;

  return (
    <Tag
      style={{ padding, margin }}
      css={css({
        ...typographyStyles,
      })}
    >
      {children}
    </Tag>
  );
};

export default Heading;
