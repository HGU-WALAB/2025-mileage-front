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
import {
  trackAddNewMileageButton,
  trackAddNewMileageModalButton,
} from '@/service/amplitude/trackEvent';
import { styled, useMediaQuery, useTheme } from '@mui/material';

import { useNewMileageForm } from '../hooks/useNewMileageForm';
import { GuideDescSection } from './GuideDescSection';

interface Props {
  semester: string;
  subitemId: number;
}

export const AddMileageModal = ({ semester, subitemId }: Props) => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);
  const theme = useTheme();
  const { open, toggleModal } = useOpenModal();

  const { desc1, desc2, file, handleSubmit } = useNewMileageForm(
    semester,
    subitemId,
    toggleModal,
  );

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
        <Button
          label="등록하기"
          isRound
          style={{ width: '100px' }}
          onClick={() => trackAddNewMileageModalButton()}
        />
      }
      size="large"
      hasCloseButton
      style={{
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Modal.Header>마일리지 활동 등록하기</Modal.Header>
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
                items={[semester]}
                selectedItem={semester}
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
              <FormField.ErrorMessage value={desc1.errorMessage} />
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
                {file.value ? (
                  <Text
                    style={{
                      ...theme.typography.body2,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {file.value?.name}
                  </Text>
                ) : (
                  <>
                    <Text style={{ ...theme.typography.body2 }}>
                      활동을 증명할 파일을 업로드해주세요
                    </Text>
                    <Text style={{ ...theme.typography.body2 }}>
                      첨부파일은 pdf만 업로드 가능
                    </Text>
                  </>
                )}
              </Flex.Column>
            </Flex.Row>
            <FormField.Box />
          </FormField>

          <Flex.Row justify="center" gap="1rem" margin="2rem 0 0">
            <S.CancelButton
              label="취소하기"
              onClick={toggleModal}
              size="large"
            />
            <S.SubmitButton
              type="submit"
              label="등록하기"
              size="large"
              onClick={() => trackAddNewMileageButton()}
            />
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
  SubmitButton: styled(Button)`
    width: 300px;
  `,
  CancelButton: styled(Button)`
    background-color: ${({ theme }) => theme.palette.grey300};
    width: 300px;

    &:hover,
    &:active {
      background-color: ${({ theme }) => theme.palette.grey400};
    }
  `,
};
