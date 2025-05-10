import { Flex } from '@/components';
import { boxShadow } from '@/styles/common';
import { styled, useTheme } from '@mui/material';

import { useGetUserInfoQuery } from '@/pages/LoginPage/hooks/useGetUserInfoQuery';

export const GithubGraphSection = () => {
  const theme = useTheme();
  const { userInfo } = useGetUserInfoQuery();

  const githubID = userInfo?.githubLink
    ? userInfo.githubLink.split('/').filter(Boolean).pop()
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
      margin="auto 0"
    >
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
