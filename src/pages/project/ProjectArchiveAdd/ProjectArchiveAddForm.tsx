import {
  Button,
  ControlledFormField,
  Flex,
  FormField,
  Text,
} from '@/components';
import { Autocomplete, styled } from '@mui/material';
import { useState } from 'react';
import {
  Controller,
  FieldErrors,
  FormProvider,
  useForm,
  useFieldArray,
} from 'react-hook-form';
import { toast } from 'react-toastify';

import { TOAST_MESSAGES } from '@/constants/toastMessage';
import { TECH_OPTIONS } from '../constants/techOptions';
import { ProjectArchiveAddFormValues } from '../types/projectArchiveAdd';
import { usePostProjectArchiveAddMutation } from '../hooks/usePostProjectArchiveAddMutation';
import { PlusIcon, AsteriskIcon } from '@/assets';

interface Props {
  toggleModal: () => void;
}

export const ProjectArchiveAddForm = ({ toggleModal }: Props) => {

  const methods = useForm<ProjectArchiveAddFormValues>({
    defaultValues: {
      name: '',
      description: '',
      techStack: [],
      role: '',
      start_date: '',
      github_id: '',
      github_link: '',
      other_links: [],
      thumbnail: undefined,
    },
  });

  const { control, handleSubmit } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'other_links',
  });
  const { postProjectArchiveAdd } = usePostProjectArchiveAddMutation();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);


  const onSubmit = async (formValues: ProjectArchiveAddFormValues) => {
    try {
      // 기타 링크 validation: 라벨과 URL 중 하나만 채워진 경우 체크
      if (formValues.other_links && formValues.other_links.length > 0) {
        for (const link of formValues.other_links) {
          const hasLabel = link.label && link.label.trim() !== '';
          const hasUrl = link.url && link.url.trim() !== '';
          
          if ((hasLabel && !hasUrl) || (!hasLabel && hasUrl)) {
            toast.error('기타 링크의 라벨과 URL을 모두 입력해주세요.');
            return;
          }
        }
      }

      await postProjectArchiveAdd({
        formValues,
      });

      toast.success(TOAST_MESSAGES.addProject.succeed);
      toggleModal();
    } catch (error) {
      toast.error(TOAST_MESSAGES.addProject.failed);
      console.error(error);
    }
  };

  const onError = (errors: FieldErrors<ProjectArchiveAddFormValues>) => {
    const firstError = Object.values(errors)[0];
    if (firstError?.message) {
      toast.error(firstError.message.toString());
    } else {
      toast.error(TOAST_MESSAGES.addProject.failed);
    }
  };

  const handleAddLink = () => {
    if (fields.length < 4) {
      append({ label: '', url: '' });
    }
  };

  const handleRemoveLink = (index: number) => {
    remove(index);
  };

  return (
    <S.FormContainer>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <FormProvider {...methods}>
          <S.FormContent>
          <S.InputContainer>
            <ControlledFormField<ProjectArchiveAddFormValues>
              name="name"
              label="프로젝트 이름"
              placeholder="프로젝트 이름을 입력하세요"
              rules={{ required: '프로젝트 이름은 필수입니다' }}
              control={control}
            />
          </S.InputContainer>

          <S.InputContainer>
            <ControlledFormField<ProjectArchiveAddFormValues>
              name="description"
              label="소개"
              placeholder="짧은 프로젝트 소개글을 작성하세요"
              control={control}
              multiline
            />
          </S.InputContainer>

          <Flex.Column gap="0.5rem" style={{ paddingBottom: '1rem' }}>
            <Flex.Row gap="0.25rem">
              <Text>기술 스택</Text>
              <AsteriskIcon />
            </Flex.Row>
            <Controller
              name="techStack"
              control={control}
              rules={{ required: '기술 스택은 필수입니다' }}
              render={({ field }) => (
                <Autocomplete
                  multiple
                  freeSolo
                  options={TECH_OPTIONS}
                  value={field.value ?? []}
                  onChange={(_, value) => field.onChange(value)}
                  renderInput={params => (
                    <FormField.Input {...params} placeholder="기술 스택을 선택하거나 직접 입력하세요" />
                  )}
                />
              )}
            />
          </Flex.Column>

          <S.InputContainer>
            <ControlledFormField<ProjectArchiveAddFormValues>
              name="role"
              label="내 역할"
              placeholder="프론트앤드, 백엔드, 기타"
              control={control}
            />
          </S.InputContainer>

          <Flex.Column gap="0.5rem" style={{ paddingBottom: '1rem' }}>
            <Flex.Row gap="0.25rem">
              <Text>프로젝트 시작일</Text>
              <AsteriskIcon />
            </Flex.Row>
            <Controller
              name="start_date"
              control={control}
              rules={{ required: '프로젝트 시작일은 필수입니다' }}
              render={({ field }) => (
                <FormField.Input type="date" {...field} fullWidth />
              )}
            />
          </Flex.Column>

          <S.InputContainer>
            <ControlledFormField<ProjectArchiveAddFormValues>
              name="github_id"
              label="깃허브 ID"
              placeholder="깃허브 아이디를 입력하세요"
              control={control}
            />
          </S.InputContainer>

          <S.InputContainer>
            <ControlledFormField<ProjectArchiveAddFormValues>
              name="github_link"
              label="깃허브 레포지토리 링크"
              placeholder="http://github.com/usrname/repo"
              control={control}
            />
          </S.InputContainer>

          <S.InputContainer>
            <Flex.Column gap="0.5rem" style={{ paddingBottom: '1rem' }}>
              <Flex.Row justify="space-between" align="center">
                <Text style={{ margin: 0 }}>기타 링크 추가하기</Text>
                {fields.length < 4 && (
                  <S.AddButton onClick={handleAddLink} type="button">
                    <PlusIcon width={16} height={16} />
                  </S.AddButton>
                )}
              </Flex.Row>
              
              {fields.map((field, index) => (
                <Flex.Column key={field.id} gap="0.5rem">
                  <S.LinkRow>
                    <Controller
                      name={`other_links.${index}.label` as const}
                      control={control}
                      render={({ field }) => (
                        <FormField.Input
                          {...field}
                          placeholder="링크 이름"
                          style={{ flex: '0 0 30%', minWidth: '120px' }}
                        />
                      )}
                    />
                    <Controller
                      name={`other_links.${index}.url` as const}
                      control={control}
                      render={({ field }) => (
                        <FormField.Input
                          {...field}
                          placeholder="com/usrname/repo"
                          style={{ flex: '1', minWidth: '200px' }}
                        />
                      )}
                    />
                    <Button
                      label="삭제"
                      variant="outlined"
                      size="small"
                      onClick={() => handleRemoveLink(index)}
                      type="button"
                      style={{ flex: '0 0 auto' }}
                    />
                  </S.LinkRow>
                </Flex.Column>
              ))}
            </Flex.Column>
          </S.InputContainer>

          <S.InputContainer>
            <Flex.Column gap="0.5rem">
              <Text>프로젝트 이미지</Text>
              <Controller
                name="thumbnail"
                control={control}
                render={({ field }) => (
                  <Flex.Column gap="0.5rem">
                    <Button
                      label="파일 선택하기"
                      variant="outlined"
                      onClick={() => {
                        const input = document.createElement('input');
                        input.type = 'file';
                        input.accept = 'image/*';
                        input.onchange = (e) => {
                          const file = (e.target as HTMLInputElement).files?.[0];
                          if (file) {
                            const fileList = new DataTransfer();
                            fileList.items.add(file);
                            field.onChange(fileList.files);

                            const url = URL.createObjectURL(file);
                            setPreviewUrl(url);
                          }
                        };
                        input.click();
                      }}
                      type="button"
                      style={{ width: 'fit-content' }}
                    />
                    
                    {previewUrl && (
                      <S.ImagePreview>
                        <img
                          src={previewUrl}
                          alt="프로젝트 이미지 미리보기"
                        />
                      </S.ImagePreview>
                    )}
                    
                    {!previewUrl && (
                      <S.ImagePlaceholder>
                        <Text style={{ color: '#999', fontSize: '0.875rem' }}>이미지를 선택해주세요</Text>
                      </S.ImagePlaceholder>
                    )}
                  </Flex.Column>
                )}
              />
            </Flex.Column>
          </S.InputContainer>

          <S.ButtonContainer>
            <Button
              label="취소"
              variant="outlined"
              size="medium"
              onClick={toggleModal}
              type="button"
            />
            <Button
              label="추가하기"
              size="medium"
              type="submit"
              color="blue"
            />
          </S.ButtonContainer>
          </S.FormContent>
        </FormProvider>
      </form>
    </S.FormContainer>
  );
};

const S = {
  FormContainer: styled('div')`
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  `,

  FormContent: styled(Flex.Column)`
    gap: 1.5rem;
    width: 100%;
  `,

  InputContainer: styled('div')`
    width: 100%;
    
    & > div {
      width: 100%;
    }
    
    input, textarea {
      width: 100% !important;
      max-width: 100%;
    }
  `,


  LinkRow: styled(Flex.Row)`
    gap: 0.5rem;
    align-items: center;
    width: 100%;
    flex-wrap: nowrap;
    
    @media (max-width: 768px) {
      flex-wrap: wrap;
      gap: 0.25rem;
      
      & > * {
        flex: 1 1 100% !important;
        min-width: unset !important;
      }
      
      & > button {
        flex: 0 0 auto !important;
        width: fit-content;
        margin-top: 0.25rem;
      }
    }
  `,

  AddButton: styled('button')`
    background-color: #537FF1;
    border: 1px solid #537FF1;
    border-radius: 0.5rem;
    padding: 0.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s ease;
    flex-shrink: 0;

    &:hover {
      background-color: #537FF1;
    }
  `,

  ImagePreview: styled('div')`
    width: 100%;
    height: 200px;
    border: 1px solid #e0e0e0;
    border-radius: 0.5rem;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    
    @media (max-width: 768px) {
      height: 200px;
    }
  `,

  ImagePlaceholder: styled('div')`
    width: 100%;
    height: 200px;
    border: 1px dashed #ddd;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fafafa;
    transition: border-color 0.2s ease;
    
    &:hover {
      border-color: #999;
    }
    
    @media (max-width: 768px) {
      height: 200px;
    }
  `,

  ButtonContainer: styled(Flex.Row)`
    gap: 1rem;
    justify-content: flex-end;
    margin-top: 1rem;
    flex-wrap: wrap;
    
    @media (max-width: 768px) {
      justify-content: center;
      gap: 0.75rem;
    }
    
    button {
      min-width: 120px;
      
      @media (max-width: 768px) {
        min-width: 100px;
        flex: 1;
        max-width: 150px;
      }
    }
  `,
};
