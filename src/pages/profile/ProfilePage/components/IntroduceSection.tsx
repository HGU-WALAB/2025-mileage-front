import { Flex, Heading } from '@/components';
import { boxShadow } from '@/styles/common';
import { styled, useTheme } from '@mui/material';

import { useGetProfileQuery } from '../../hooks/useGetProfileQuery';

export const IntroduceSection = () => {
  const theme = useTheme();
  const { profile } = useGetProfileQuery();

  return (
    <S.Section
      width="100%"
      justify="center"
      padding="1rem"
      gap="1rem"
      backgroundColor={theme.palette.variant.default}
      wrap="wrap"
      margin="auto 0"
    >
      <Heading as="h2" color={theme.palette.primary.main}>
        About Me
      </Heading>

      <S.Content align="center" gap="1rem">
        <S.Bar />
        {profile?.self_description}
      </S.Content>

      <S.EditButton onClick={() => {}}>편집하기</S.EditButton>
    </S.Section>
  );
};

const S = {
  Section: styled(Flex.Column)`
    border-radius: 1rem;
    ${boxShadow}
    position: relative;
  `,
  Content: styled(Flex.Row)`
    height: fit-content;
  `,
  Bar: styled('div')`
    background-color: ${({ theme }) => theme.palette.primary.light};
    border-radius: 0.25rem;
    height: 50px;
    width: 10px;
  `,
  EditButton: styled('button')`
    border: none;
    color: ${({ theme }) => theme.palette.primary.main};
    cursor: pointer;
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
    position: absolute;
    right: 0.5rem;
    text-decoration: underline;
    top: 0.5rem;

    &:hover {
      color: ${({ theme }) => theme.palette.primary.dark};
    }
  `,
};
