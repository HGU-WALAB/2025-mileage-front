// import { styled } from '@mui/material';
import { GridSectionCard } from '../../components/GridSectionCard';
import { TechStackContent } from '../../components/TechStackContent';
import { useGetTechStackQuery } from '../../hooks/useGetTechStackQuery';
// import { useOpenModal } from '@/hooks';
// import { EditSkillModal } from './EditSkillModal';

export const TechStackSection = () => {
  const { techStack } = useGetTechStackQuery();
  // const { open, toggleModal } = useOpenModal(false);

  return (
    <GridSectionCard>
      <TechStackContent techStack={techStack} />
      {/* <S.EditButton onClick={toggleModal}>편집하기</S.EditButton> */}
      {/* <EditSkillModal open={open} onClose={toggleModal} techStack={techStack} /> */}
    </GridSectionCard>
  );
};

// const S = {
//   EditButton: styled('button')`
//     border: none;
//     color: ${({ theme }) => theme.palette.primary.main};
//     cursor: pointer;
//     font-size: 0.875rem;
//     padding: 0.5rem 1rem;
//     position: absolute;
//     right: 0.5rem;
//     text-decoration: underline;
//     top: 0.5rem;

//     &:hover {
//       color: ${({ theme }) => theme.palette.primary.dark};
//     }
//   `,
// }