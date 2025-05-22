import {
  Button,
  ControlledFormField,
  Flex,
  FormField,
  Text,
  UploadButton,
} from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { TOAST_MESSAGES } from '@/constants/toastMessage';
import { Autocomplete, styled, Typography, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import {
  Controller,
  FieldErrors,
  FormProvider,
  useForm,
} from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { usePutProjectMutation } from '@/pages/project/hooks/usePutProjectMutation';
import { TECH_OPTIONS } from '../../constants/techOptions';
import { useGetProjectQuery } from '../../hooks/useGetProjectQuery';
import { ProjectFormValues } from '../../types/project';

export const ProjectEditForm = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);

  const { projectId } = useParams<{ projectId: string }>();
  const { project } = useGetProjectQuery(projectId ?? '');

  const methods = useForm<ProjectFormValues>({
    defaultValues: {
      name: project.name,
      role: project.role,
      description: project.description,
      content: project.content,
      start_date: project.start_date,
      end_date: project.end_date,
      deployed_link: project.deployed_link,
      github_link: project.github_link,
      blog_link: project.blog_link,
      achievement: project.achievement,
      techStack: project.techStack.techStack,
      thumbnail: undefined,
    },
  });
  const { control, handleSubmit } = methods;
  const { putProject } = usePutProjectMutation();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const onSubmit = async (formValues: ProjectFormValues) => {
    try {
      await putProject({
        projectId: projectId ?? '',
        formValues,
      });

      toast.success(TOAST_MESSAGES.editProject.succeed);
      navigate(ROUTE_PATH.project);
    } catch (error) {
      toast.error(TOAST_MESSAGES.editProject.failed);
      console.error(error);
    }
  };

  const onError = (errors: FieldErrors<ProjectFormValues>) => {
    const firstError = Object.values(errors)[0];
    if (firstError?.message) {
      toast.error(firstError.message.toString());
    } else {
      toast.error(TOAST_MESSAGES.editProject.failed);
    }
  };

  return (
    <S.Container isMobile={isMobile}>
      <Typography variant="body1" color="text.secondary" mb={3}>
        나의 멋진 프로젝트를 공유해봐요!
      </Typography>

      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <FormProvider {...methods}>
          <Flex.Column gap="2rem">
            <ControlledFormField<ProjectFormValues>
              name="name"
              label="프로젝트 이름"
              placeholder="예시 - 마일스톤 시스템"
              rules={{ required: '프로젝트 이름은 필수입니다' }}
              control={control}
            />

            <ControlledFormField<ProjectFormValues>
              name="description"
              label="프로젝트 소개"
              placeholder="프로젝트에 대해서 설명해주세요!"
              rules={{ required: '프로젝트 소개는 필수입니다' }}
              control={control}
              multiline
            />

            <ControlledFormField<ProjectFormValues>
              name="role"
              label="역할"
              placeholder="나의 역할"
              control={control}
            />

            <Flex.Column gap=".25rem">
              <Text>진행기간</Text>
              <Flex.Row gap="1rem">
                <Controller
                  name="start_date"
                  control={control}
                  render={({ field }) => (
                    <FormField.Input type="date" {...field} fullWidth />
                  )}
                />
                -
                <Controller
                  name="end_date"
                  control={control}
                  render={({ field }) => (
                    <FormField.Input type="date" {...field} fullWidth />
                  )}
                />
              </Flex.Row>
            </Flex.Column>

            <FormField direction="column">
              <FormField.Label
                label="프로젝트 링크"
                style={{ marginBottom: '.5rem' }}
              />
              <Flex.Column width="100%" gap="1rem">
                <ControlledFormField<ProjectFormValues>
                  name="deployed_link"
                  label="서비스 링크"
                  placeholder="https://walab.info/mileage/"
                  control={control}
                  direction="row"
                />
                <ControlledFormField<ProjectFormValues>
                  name="github_link"
                  label="GitHub 링크"
                  placeholder="https://github.com/HGU-WALAB/2025-mileage-front"
                  control={control}
                  direction="row"
                />
                <ControlledFormField<ProjectFormValues>
                  name="blog_link"
                  label="블로그 링크"
                  placeholder="https://healim01.tistory.com/"
                  control={control}
                  direction="row"
                />
              </Flex.Column>
            </FormField>

            <Flex.Column gap=".25rem">
              <Text>사용한 기술 스택</Text>
              <Controller
                name="techStack"
                control={control}
                render={({ field }) => (
                  <Autocomplete
                    multiple
                    options={TECH_OPTIONS}
                    value={field.value ?? []}
                    onChange={(_, value) => field.onChange(value)}
                    renderInput={params => (
                      <FormField.Input {...params} placeholder="기술 스택" />
                    )}
                  />
                )}
              />
            </Flex.Column>

            <ControlledFormField<ProjectFormValues>
              name="content"
              label="주요 기여 및 역할"
              placeholder="어떤 일을 하셨나요?"
              control={control}
              multiline
            />

            <ControlledFormField<ProjectFormValues>
              name="achievement"
              label="성과 설명"
              placeholder="예시 - 교내 대회 우수상 수상, 사용자 수 2배 증가"
              control={control}
              multiline
            />

            <FormField direction="column">
              <FormField.Label label="프로젝트 이미지 업로드" />
              <Controller
                name="thumbnail"
                control={control}
                render={({ field }) => (
                  <Flex.Row gap="1rem" align="center" justify="space-between">
                    <UploadButton
                      label="대표 이미지 업로드"
                      onUpload={(file: File) => {
                        const fileList = new DataTransfer();
                        fileList.items.add(file);
                        field.onChange(fileList.files);

                        const url = URL.createObjectURL(file);
                        setPreviewUrl(url);
                      }}
                    />

                    {previewUrl && (
                      <img
                        src={previewUrl}
                        alt="이미지 미리보기"
                        style={{
                          marginTop: '1rem',
                          maxWidth: '200px',
                          borderRadius: '0.5rem',
                        }}
                      />
                    )}
                  </Flex.Row>
                )}
              />
            </FormField>

            <Flex.Row justify="center" margin="2rem 0 0">
              <Button label="추가하기" type="submit" size="large" />
            </Flex.Row>
          </Flex.Column>
        </FormProvider>
      </form>
    </S.Container>
  );
};

const S = {
  Container: styled(Flex.Column)<{ isMobile: boolean }>`
    background-color: ${({ theme }) => theme.palette.white};
    border: 1px solid ${({ theme }) => theme.palette.grey200};
    border-radius: ${({ isMobile }) => (isMobile ? `0` : `1rem`)};
    margin: ${({ isMobile }) => (isMobile ? `0 auto` : `1rem auto`)};
    max-width: 1000px;
    padding: ${({ isMobile }) => (isMobile ? `1rem` : `2rem 4rem`)};
    width: 100%;
  `,
};
