import { Button, Flex, Modal, Text } from '@/components';
import { styled, useMediaQuery, useTheme } from '@mui/material';
import { FormProvider } from 'react-hook-form';

import { TechStackAddForm } from './TechStackAddForm';
import { useEditTechStackForm } from '../../hooks/useEditTechStackForm';
import { usePatchTechStackMutation } from '../../hooks/usePatchTechStackMutation';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';

interface Props {
  open: boolean;
  onClose: () => void;
  techStack: string[];
}

export const EditSkillModal = ({ open, onClose, techStack }: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);

  const { methods } = useEditTechStackForm(techStack);
  const { patchTechStack } = usePatchTechStackMutation();

  const onSubmit = async (data: { techStack: string[] }) => {
    await patchTechStack(data);
    onClose();
  };

  return (
    <Modal
      open={open}
      toggleModal={onClose}
      size="medium"
      hasCloseButton
      style={{ backgroundColor: theme.palette.background.default }}
    >
      <Modal.Header>기술 스택 수정</Modal.Header>
      <Modal.Body
        position="center"
        style={{ width: isMobile ? '100%' : '80%', margin: '2rem auto' }}
      >
        <FormProvider {...methods}>
          <S.Form onSubmit={methods.handleSubmit(onSubmit)}>
            <Text style={{ ...theme.typography.h6, marginBottom: '1rem' }}>
              사용한 기술 스택
            </Text>

            <TechStackAddForm />

            <Flex.Row justify="center" gap="1.5rem" margin="2rem 0 0">
              <S.CancelButton label="취소" onClick={onClose} />
              <S.SaveButton type="submit" label="저장하기" />
            </Flex.Row>
          </S.Form>
        </FormProvider>
      </Modal.Body>
    </Modal>
  );
};

const S = {
  Form: styled('form')`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 1rem;
    width: 100%;
  `,
  SaveButton: styled(Button)`
    width: 200px;
  `,
  CancelButton: styled(Button)`
    width: 200px;
    background-color: ${({ theme }) => theme.palette.grey300};

    &:hover,
    &:active {
      background-color: ${({ theme }) => theme.palette.grey400};
    }
  `,
};
