import { Flex } from '@/components';
import { boxShadow } from '@/styles/common';
import { styled } from '@mui/material';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  onClick?: () => void;
}

export const GridSectionCard = ({ children, onClick }: Props) => {
  return (
    <S.Section
      width="100%"
      height="250px"
      justify="center"
      align="center"
      padding="2rem"
      onClick={onClick}
    >
      {children}
    </S.Section>
  );
};

const S = {
  Section: styled(Flex.Column)`
    background-color: ${({ theme }) => theme.palette.variant.default};
    border-radius: 1rem;
    cursor: pointer;
    ${boxShadow};
    position: relative;

    &:hover,
    &:active {
      background-color: ${({ theme }) => theme.palette.variant.grey};
    }
  `,
};
