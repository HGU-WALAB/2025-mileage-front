import { Button, Dropdown, Flex, FormField, Modal, Text } from '@/components';
import GuideDescSection from '@/components/AddMileage/GuideDescSection';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { useOpenModal } from '@/hooks';
import { SubmittedMileageResponse } from '@/types/mileage';
import { styled, useMediaQuery, useTheme } from '@mui/material';

interface Props {
  item: SubmittedMileageResponse;
}

const SubmittedMileageModal = ({ item }: Props) => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);
  const theme = useTheme();
  const { open, toggleModal } = useOpenModal();

  return (
    <Modal
      open={open}
      toggleModal={toggleModal}
      trigger={<Button label="상세보기" isRound style={{ width: '100px' }} />}
      size="large"
      hasCloseButton
      style={{
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Modal.Header>마일리지 등록 항목 상세보기</Modal.Header>
      <Modal.Body
        position="center"
        style={{ width: isMobile ? '100%' : '85%', margin: '2rem auto' }}
      >
        <GuideDescSection />

        <S.Form>
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
                disabled
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
                value={item.description1}
                disabled
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
                value={item.description2}
                disabled
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
            <Flex.Row gap="1rem" align="center">
              <Flex.Column>
                {item.file ? (
                  <Text
                    style={{
                      ...theme.typography.body2,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {item.file.name}
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
            <S.CloseButton label="닫기" onClick={toggleModal} size="large" />
          </Flex.Row>
        </S.Form>
      </Modal.Body>
    </Modal>
  );
};

export default SubmittedMileageModal;

const S = {
  Form: styled('form')`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 2rem;
    width: 100%;
  `,
  CloseButton: styled(Button)`
    width: 300px;
  `,
};
