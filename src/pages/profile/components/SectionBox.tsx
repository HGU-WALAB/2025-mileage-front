import { Flex } from '@/components';
import { boxShadow } from '@/styles/common';
import { styled, useTheme } from '@mui/material';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  height?: string;
  minHeight?: string;
}

export const SectionBox = ({ height, minHeight, children }: Props) => {
  const theme = useTheme();
  return (
    <S.Section
      width="100%"
      height={height}
      padding="1rem"
      backgroundColor={theme.palette.variant.default}
      wrap="wrap"
      style={{ minHeight: minHeight }}
    >
      {children}
    </S.Section>
  );
};

const S = {
  Section: styled(Flex.Column)`
    border-radius: 1rem;
    ${boxShadow}
    overflow: hidden;
    overflow-y: scroll;
    position: relative;
  `,
};
