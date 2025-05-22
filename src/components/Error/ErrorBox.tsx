import { ErrorContent, Flex } from '@/components';
import { boxShadow } from '@/styles/common';
import { styled } from '@mui/material';
import { AxiosError } from 'axios';

export const ErrorBox = ({ error }: { error: AxiosError }) => {
  return (
    <S.Section
      width="100%"
      height="250px"
      justify="center"
      align="center"
      padding="2rem"
    >
      <ErrorContent error={error} />
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
  `,
};
