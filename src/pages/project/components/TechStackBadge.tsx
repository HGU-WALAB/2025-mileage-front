import { Text } from '@/components';
import { styled } from '@mui/material';

export const TechStackBadge = ({ tech }: { tech: string }) => {
  return <S.TechBadge as="span">{tech}</S.TechBadge>;
};

const S = {
  TechBadge: styled(Text)`
    background-color: ${({ theme }) => theme.palette.primary.light};
    border-radius: 24px;
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 0.75rem;
    padding: 0.125rem 0.5rem;
  `,
};
