import Heading from '@/components/_common/Heading/Heading';
import { boxShadow } from '@/styles/common';
import { styled } from '@mui/material';

const Title = ({ label }: { label: string }) => {
  return (
    <S.Container>
      <Heading as={'h3'}>{label}</Heading>
    </S.Container>
  );
};

export default Title;

const S = {
  Container: styled('div')`
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-radius: 4px;
    color: ${({ theme }) => theme.palette.white};
    margin-bottom: 1rem;
    padding: 0.25rem 1.5rem;
    width: fit-content;
    ${boxShadow}
  `,
};
