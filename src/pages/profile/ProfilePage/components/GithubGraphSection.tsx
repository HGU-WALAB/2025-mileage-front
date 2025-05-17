import { Flex, Heading } from '@/components';
import { boxShadow } from '@/styles/common';
import { styled, useTheme } from '@mui/material';

import { useGetProfileQuery } from '../../hooks/useGetProfileQuery';

export const GithubGraphSection = () => {
  const theme = useTheme();
  const { profile } = useGetProfileQuery();

  const githubID = profile?.github_link
    ? profile.github_link.split('/').filter(Boolean).pop()
    : undefined;
  const graphColor = theme.palette.primary.main.split('#').pop();

  return (
    <S.Section
      width="100%"
      justify="space-around"
      align="center"
      padding="1rem"
      gap="1rem"
      backgroundColor={theme.palette.variant.default}
      wrap="wrap"
    >
      <Flex.Row width="100%" justify="flex-start">
        <Heading as="h2" color={theme.palette.primary.main}>
          Github Contributions
        </Heading>
      </Flex.Row>
      <S.Graph src={`https://ghchart.rshah.org/${graphColor}/${githubID}`} />
    </S.Section>
  );
};

const S = {
  Section: styled(Flex.Row)`
    border-radius: 1rem;
    ${boxShadow}
  `,
  Graph: styled('img')`
    width: 100%;
  `,
};
