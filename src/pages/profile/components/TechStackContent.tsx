import { Flex } from '@/components';
import { styled } from '@mui/material';

import { TechStackBadge } from '@project/components/TechStackBadge';

export const TechStackContent = ({ techStack }: { techStack: string[] }) => {
  return (
    <Flex.Column height="100%" justify="center" align="center" gap="1.5rem">
      <S.LabelText>나의 스킬</S.LabelText>
      <Flex.Row justify="center" wrap="wrap" gap=".5rem" width="100%">
        {techStack.map(skill => (
          <TechStackBadge key={skill} tech={skill} />
        ))}
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
