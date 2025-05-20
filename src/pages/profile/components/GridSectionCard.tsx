import { boxShadow } from '@/styles/common';
import { styled } from '@mui/material';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  onClick?: () => void;
}

export const GridSectionCard = ({ children, onClick }: Props) => {
  return <S.Section onClick={onClick}>{children}</S.Section>;
};

const S = {
  Section: styled('div')`
    align-items: center;
    background-color: ${({ theme }) => theme.palette.variant.default};
    border-radius: 1rem;
    cursor: pointer;
    height: 250px;
    justify-content: center;
    padding: 2rem;
    ${boxShadow};
    width: 100%;

    &:hover,
    &:active {
      background-color: ${({ theme }) => theme.palette.variant.grey};
    }
  `,
};
