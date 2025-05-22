import { Flex, Heading, Text } from '@/components';
import { styled, useTheme } from '@mui/material';

export const IntroduceContent = ({
  introduce,
}: {
  introduce: string | null;
}) => {
  const theme = useTheme();
  return (
    <Flex.Column height="100%" gap="1rem">
      <Heading as="h2" color={theme.palette.primary.main}>
        About Me
      </Heading>

      <S.Content height="100%" align="center" gap="1rem">
        <S.Bar />
        {introduce ? (
          introduce
        ) : (
          <Text color={theme.palette.text.disabled}>
            자기소개를 추가해주세요
          </Text>
        )}
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
