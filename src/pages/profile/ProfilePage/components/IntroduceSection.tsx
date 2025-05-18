import { styled } from '@mui/material';

import { IntroduceContent } from '../../components/IntroduceContent';
import { SectionBox } from '../../components/SectionBox';
import { useGetProfileQuery } from '../../hooks/useGetProfileQuery';

export const IntroduceSection = () => {
  const { profile } = useGetProfileQuery();

  return (
    <SectionBox height="150px">
      <IntroduceContent introduce={profile.self_description} />
      <S.EditButton onClick={() => {}}>편집하기</S.EditButton>
    </SectionBox>
  );
};

const S = {
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
