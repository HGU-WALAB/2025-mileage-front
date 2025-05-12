import { EditIcon } from '@/assets';
import {
  Button,
  Dropdown,
  Flex,
  FormField,
  Modal,
  Text,
  UploadButton,
} from '@/components';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { useOpenModal } from '@/hooks';
import { trackSubmittedMileageModalEditButton } from '@/service/amplitude/trackEvent';
import { styled, useMediaQuery, useTheme } from '@mui/material';

import { useEditMileageForm } from '../../hooks/useEditMileageForm';
import { SubmittedMileageResponse } from '../../types/mileage';
import { GuideDescSection } from './GuideDescSection';

interface Props {
  item: SubmittedMileageResponse;
}

export const EditSubmittedMileageModal = ({ item }: Props) => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);
  const theme = useTheme();
  const { open, toggleModal } = useOpenModal();

  const { desc1, desc2, file, handleSubmit } = useEditMileageForm({
    item,
    toggleModal,
  });

  const handleSubmitForm = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>,
  ) => {
    handleSubmit(e);
  };

  return (
    <Modal
      open={open}
      toggleModal={toggleModal}
      trigger={
        <S.IconButton onClick={() => trackSubmittedMileageModalEditButton()}>
          <EditIcon />
        </S.IconButton>
      }
      size="large"
      hasCloseButton
      style={{
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Modal.Header>마일리지 등록 항목 수정하기</Modal.Header>
      <Modal.Body
        position="center"
        style={{ width: isMobile ? '100%' : '85%', margin: '2rem auto' }}
      >
        <GuideDescSection />

        <S.Form onSubmit={handleSubmitForm}>
          <FormField
            direction={isMobile ? 'column' : 'row'}
            style={{
              justifyContent: 'space-between',
            }}
          >
            <FormField.Label
              label={'년도 및 학기'}
              required
              style={{
                flexShrink: 0,
                width: '150px',
                ...theme.typography.body2,
              }}
            />
            <Flex.Column width="100%">
              <Dropdown
                items={[item.semester]}
                selectedItem={item.semester}
                setSelectedItem={() => {}}
                width="100%"
              />
              <FormField.Box />
            </Flex.Column>
          </FormField>

          <FormField direction={isMobile ? 'column' : 'row'}>
            <FormField.Label
              label={'등록 상세 정보'}
              required
              style={{
                flexShrink: 0,
                width: '150px',
                ...theme.typography.body2,
              }}
            />
            <Flex.Column width="100%">
              <FormField.Input
                placeholder={'활동 항목에 대해 작성 해주세요'}
                fullWidth
                value={desc1.value}
                onChange={desc1.handleChange}
              />
            </Flex.Column>
          </FormField>

          <FormField direction={isMobile ? 'column' : 'row'}>
            <FormField.Label
              label={'추가 설명'}
              style={{
                flexShrink: 0,
                width: '150px',
                ...theme.typography.body2,
              }}
            />
            <Flex.Column width="100%">
              <FormField.Input
                placeholder="활동을 자세히 설명해주세요"
                fullWidth
                value={desc2.value}
                onChange={desc2.handleChange}
                minRows={4}
                maxRows={4}
                multiline
              />
              <FormField.Box />
            </Flex.Column>
          </FormField>

          <FormField direction={isMobile ? 'column' : 'row'}>
            <FormField.Label
              label={'첨부파일'}
              style={{
                flexShrink: 0,
                width: '150px',
                ...theme.typography.body2,
              }}
            />
            <Flex.Row gap="1rem" align="center" wrap="wrap">
              <UploadButton
                label="첨부파일 업로드"
                onUpload={file.handleChange}
              />
              <Flex.Column>
                {item.file || file.value ? (
                  <Text
                    style={{
                      ...theme.typography.body2,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {file.value ? file.value.name : item.file}
                  </Text>
                ) : (
                  <>
                    <Text style={{ ...theme.typography.body2 }}>
                      제출된 파일이 없습니다.
                    </Text>
                  </>
                )}
              </Flex.Column>
            </Flex.Row>
            <FormField.Box />
          </FormField>

          <Flex.Row justify="center" gap="2rem" margin="2rem 0 0">
            <S.CloseButton
              label="닫기"
              onClick={toggleModal}
              size="large"
              color="grey"
            />
            <S.SubmitButton type="submit" label="저장하기" size="large" />
          </Flex.Row>
        </S.Form>
      </Modal.Body>
    </Modal>
  );
};

const S = {
  Form: styled('form')`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 2rem;
    width: 100%;
  `,
  IconButton: styled('button')`
    align-items: center;
    background-color: ${({ theme }) => theme.palette.grey100};
    border: 2px solid ${({ theme }) => theme.palette.grey200};
    border-radius: 0.5rem;
    display: flex;
    height: 30px;
    justify-content: center;
    width: 30px;
  `,
  SubmitButton: styled(Button)`
    width: 300px;
  `,
  CloseButton: styled(Button)`
    background-color: ${({ theme }) => theme.palette.grey300};
    width: 300px;

    &:hover,
    &:active {
      background-color: ${({ theme }) => theme.palette.grey400};
    }
  `,
};
