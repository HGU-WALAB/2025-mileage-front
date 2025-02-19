import {
  Button,
  Dropdown,
  Flex,
  FormField,
  Modal,
  Text,
  UploadButton,
} from '@/components';
import GuideDescSection from '@/components/AddMileage/GuideDescSection';
import { useNewMileageForm, useOpenModal } from '@/hooks';
import { styled, useTheme } from '@mui/material';
import { toast } from 'react-toastify';

interface Props {
  semester: string;
  subitemId: number;
}

const AddMileageModal = ({ semester, subitemId }: Props) => {
  const theme = useTheme();
  const { open, toggleModal } = useOpenModal();

  const { desc1, desc2, file, handleSubmit, isSuccess } = useNewMileageForm(
    semester,
    subitemId,
  );

  const handleSubmitForm = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>,
  ) => {
    handleSubmit(e);

    if (isSuccess) {
      toggleModal();
    } else {
      toast.error('마일리지 추가에 실패했습니다. 다시 시도해주세요');
    }
  };

  return (
    <Modal
      open={open}
      toggleModal={toggleModal}
      trigger={<Button label="등록하기" isRound style={{ width: '100px' }} />}
      size="large"
      hasCloseButton
      style={{
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Modal.Header>마일리지 활동 등록하기</Modal.Header>
      <Modal.Body
        position="center"
        style={{ width: '85%', margin: '2rem auto' }}
      >
        <GuideDescSection />

        <S.Form onSubmit={handleSubmitForm}>
          <FormField
            direction="row"
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
            <Dropdown
              label="년도 및 학기"
              items={[semester]}
              selectedItem={semester}
              setSelectedItem={() => {}}
              width="100%"
            />
          </FormField>

          <FormField direction="row">
            <FormField.Label
              label={'등록 상세 정보'}
              required
              style={{
                flexShrink: 0,
                width: '150px',
                ...theme.typography.body2,
              }}
            />
            <FormField.Input
              placeholder={'활동 항목에 대해 작성 해주세요'}
              fullWidth
              value={desc1.value}
              onChange={desc1.handleChange}
            />
            <FormField.ErrorMessage value={desc1.errorMessage} />
          </FormField>

          <FormField direction="row">
            <FormField.Label
              label={'추가 설명'}
              style={{
                flexShrink: 0,
                width: '150px',
                ...theme.typography.body2,
              }}
            />
            <FormField.Input
              placeholder="활동을 자세히 설명해주세요"
              fullWidth
              value={desc2.value}
              onChange={desc2.handleChange}
            />
            <FormField.Box />
          </FormField>

          <FormField direction="row">
            <FormField.Label
              label={'첨부파일'}
              style={{
                flexShrink: 0,
                width: '150px',
                ...theme.typography.body2,
              }}
            />
            <Flex.Row gap="1rem" align="center">
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
                      이미지파일(jpg,png)또는 pdf만 업로드 가능
                    </Text>
                  </>
                )}
              </Flex.Column>
            </Flex.Row>
            <FormField.Box />
          </FormField>

          <Flex.Row justify="center" gap="2rem" margin="2rem 0 0">
            <S.CancelButton
              label="이전으로 돌아가기"
              onClick={toggleModal}
              size="large"
            />
            <S.SubmitButton type="submit" label="등록하기" size="large" />
          </Flex.Row>
        </S.Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddMileageModal;

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
