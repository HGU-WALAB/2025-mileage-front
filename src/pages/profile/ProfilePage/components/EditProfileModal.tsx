import {
  Button,
  Flex,
  FormField,
  Modal,
  Text,
  UploadButton,
} from '@/components';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { styled, useMediaQuery, useTheme } from '@mui/material';

import { useEditProfileForm } from '@profile/hooks/useEditProfileForm';
import { ProfileResponse } from '@profile/types/profile';

interface Props {
    open: boolean;
    onClose: () => void;
    profile: ProfileResponse;
}

export const EditProfileModal = ({ open, onClose, profile }: Props) => {
    const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);
    const theme = useTheme();

    const {
        job, selfDescription, githubLink, blogLink, linkedinLink, instagramLink, profileImage, handleSubmit,
    } = useEditProfileForm({
        profile,
        toggleModal: onClose,
    });

    const handleSubmitForm = (
        e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>,
    ) => {
        handleSubmit(e);
    };

    return (
    <Modal
        open={open}
        toggleModal={onClose}
        size="large"
        hasCloseButton
        style={{
            backgroundColor: theme.palette.background.default,
        }}
    >
        <Modal.Header>프로필 수정하기</Modal.Header>
        <Modal.Body
            position="center"
            style={{ width: isMobile ? '100%' : '85%', margin: '2rem auto' }}
        >
        <S.Form onSubmit={handleSubmitForm}>
            <FormField direction={isMobile ? 'column' : 'row'}>
            <FormField.Label
                label={'프로필 이미지'}
                style={{
                flexShrink: 0,
                width: '150px',
                ...theme.typography.body2,
                }}
            />
            <Flex.Row gap="1rem" align="center" wrap="wrap">
                <UploadButton
                label="이미지 업로드"
                onUpload={profileImage.handleChange}
                />
                <Flex.Column>
                {profile.profile_image_url || profileImage.value ? (
                    <Text
                    style={{
                        ...theme.typography.body2,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}
                    >
                    {profileImage.value ? profileImage.value.name : '현재 프로필 이미지'}
                    </Text>
                ) : (
                    <>
                    <Text style={{ ...theme.typography.body2 }}>
                        프로필 이미지가 없습니다.
                    </Text>
                    </>
                )}
                </Flex.Column>
            </Flex.Row>
            <FormField.Box />
            </FormField>

            <FormField direction={isMobile ? 'column' : 'row'}>
            <FormField.Label
                label={'직업'}
                style={{
                flexShrink: 0,
                width: '150px',
                ...theme.typography.body2,
                }}
            />
            <Flex.Column width="100%">
                <FormField.Input
                placeholder={'직업을 입력해주세요'}
                fullWidth
                value={job.value}
                onChange={job.handleChange}
                />
            </Flex.Column>
            </FormField>

            <FormField direction={isMobile ? 'column' : 'row'}>
            <FormField.Label
                label={'자기소개'}
                style={{
                flexShrink: 0,
                width: '150px',
                ...theme.typography.body2,
                }}
            />
            <Flex.Column width="100%">
                <FormField.Input
                placeholder="자기소개를 입력해주세요"
                fullWidth
                value={selfDescription.value}
                onChange={selfDescription.handleChange}
                minRows={4}
                maxRows={4}
                multiline
                />
                <FormField.Box />
            </Flex.Column>
            </FormField>

            <FormField direction={isMobile ? 'column' : 'row'}>
            <FormField.Label
                label={'깃허브 링크'}
                style={{
                flexShrink: 0,
                width: '150px',
                ...theme.typography.body2,
                }}
            />
            <Flex.Column width="100%">
                <FormField.Input
                placeholder={'GitHub 링크를 입력해주세요'}
                fullWidth
                value={githubLink.value}
                onChange={githubLink.handleChange}
                />
            </Flex.Column>
            </FormField>

            <FormField direction={isMobile ? 'column' : 'row'}>
            <FormField.Label
                label={'블로그 링크'}
                style={{
                flexShrink: 0,
                width: '150px',
                ...theme.typography.body2,
                }}
            />
            <Flex.Column width="100%">
                <FormField.Input
                placeholder={'블로그 링크를 입력해주세요'}
                fullWidth
                value={blogLink.value}
                onChange={blogLink.handleChange}
                />
            </Flex.Column>
            </FormField>

            <FormField direction={isMobile ? 'column' : 'row'}>
            <FormField.Label
                label={'링크드인 링크'}
                style={{
                flexShrink: 0,
                width: '150px',
                ...theme.typography.body2,
                }}
            />
            <Flex.Column width="100%">
                <FormField.Input
                placeholder={'LinkedIn 링크를 입력해주세요'}
                fullWidth
                value={linkedinLink.value}
                onChange={linkedinLink.handleChange}
                />
            </Flex.Column>
            </FormField>

            <FormField direction={isMobile ? 'column' : 'row'}>
            <FormField.Label
                label={'인스타그램 링크'}
                style={{
                flexShrink: 0,
                width: '150px',
                ...theme.typography.body2,
                }}
            />
            <Flex.Column width="100%">
                <FormField.Input
                placeholder={'Instagram 링크를 입력해주세요'}
                fullWidth
                value={instagramLink.value}
                onChange={instagramLink.handleChange}
                />
            </Flex.Column>
            </FormField>

            <Flex.Row justify="center" gap="2rem" margin="2rem 0 0">
            <S.CloseButton
                label="닫기"
                onClick={onClose}
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