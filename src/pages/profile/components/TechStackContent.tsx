import { Flex, Text } from '@/components';
import { styled, useTheme } from '@mui/material';

import { TechStackBadge } from '@project/components/TechStackBadge';

export const TechStackContent = ({ techStack }: { techStack: string[] }) => {
  const theme = useTheme();
  return (
    <Flex.Column height="100%" justify="center" align="center" gap="1.5rem">
      <S.LabelText>나의 스킬</S.LabelText>
      <Flex.Row justify="center" wrap="wrap" gap=".5rem" width="100%">
        {techStack ? (
          techStack.map(skill => <TechStackBadge key={skill} tech={skill} />)
        ) : (
          <Text color={theme.palette.text.disabled}>
            나의 스킬을 추가해주세요
          </Text>
        )}
      </Flex.Row>
    </Flex.Column>
  );
};

const S = {
  LabelText: styled('p')`
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 1rem;
    font-weight: 600;
    margin: 0;
  `,
};
