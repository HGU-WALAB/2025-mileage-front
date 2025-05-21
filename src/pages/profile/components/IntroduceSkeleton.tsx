import { Flex, Heading } from '@/components';
import { Skeleton, styled, useTheme } from '@mui/material';

export const IntroduceSkeleton = () => {
  const theme = useTheme();

  return (
    <Flex.Column
      width="100%"
      padding="1rem"
      gap="1rem"
      backgroundColor={theme.palette.variant.default}
      wrap="wrap"
      margin="auto 0"
      style={{ borderRadius: '1rem' }}
    >
      <Heading as="h2" color={theme.palette.primary.main}>
        About Me
      </Heading>

      <S.Content align="center" gap="1rem">
        <S.Bar />
        <Flex.Column gap="0.5rem" style={{ flex: 1 }}>
          <Skeleton variant="text" width="80%" height={20} />
          <Skeleton variant="text" width="70%" height={20} />
        </Flex.Column>
      </S.Content>
    </Flex.Column>
  );
};

const S = {
  Content: styled(Flex.Row)`
    height: fit-content;
  `,
  Bar: styled('div')`
    background-color: ${({ theme }) => theme.palette.primary.light};
    border-radius: 0.25rem;
    height: 100%;
    width: 10px;
  `,
};
