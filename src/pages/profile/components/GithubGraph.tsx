import { Flex, Heading } from '@/components';
import { boxShadow } from '@/styles/common';
import { styled, useTheme } from '@mui/material';

import { SectionBox } from './SectionBox';

export const GithubGraph = ({ githubID }: { githubID?: string }) => {
  const theme = useTheme();
  const graphColor = theme.palette.primary.main.split('#').pop();
  return (
    <SectionBox>
      <Heading as="h2" color={theme.palette.primary.main}>
        Github Contributions
      </Heading>
      {githubID ? (
        <S.Graph src={`https://ghchart.rshah.org/${graphColor}/${githubID}`} />
      ) : (
        <Flex.Row align="center" justify="center" height="100px">
          <Heading as={'h3'} color={theme.palette.grey400}>
            아직 깃허브 계정이 연동되지 않았어요. 연동하면 활동 내역(잔디)을
            확인할 수 있어요!
          </Heading>
        </Flex.Row>
      )}
    </SectionBox>
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
