import { Flex } from '@/components';
import { mockSkills } from '@/mocks/fixtures/skills';
import { boxShadow } from '@/styles/common';
import { styled } from '@mui/material';

import { TechStackBadge } from '@project/components/TechStackBadge';

export const SkillSection = () => {
  const mockSkill = mockSkills.techStack;

  return (
    <S.Section>
      <S.LabelText>나의 스킬</S.LabelText>
      <Flex.Row justify="center" wrap="wrap" gap=".5rem" width="100%">
        {mockSkill.map(skill => (
          <TechStackBadge key={skill} tech={skill} />
        ))}
      </Flex.Row>
    </S.Section>
  );
};

const S = {
  Section: styled('div')`
    align-items: center;
    background-color: ${({ theme }) => theme.palette.variant.default};
    border-radius: 1rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    height: 250px;
    justify-content: center;
    padding: 2rem;
    ${boxShadow};
    width: 100%;

    &:hover,
    &:active {
      background-color: ${({ theme }) => theme.palette.variant.grey};
    }
  `,
  LabelText: styled('p')`
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 1rem;
    font-weight: 600;
    margin: 0;
  `,
  MileageNumber: styled('p')`
    color: ${({ theme }) => theme.palette.primary.dark};
    font-size: 4rem;
    font-weight: 700;
    margin: 0;
  `,
};
