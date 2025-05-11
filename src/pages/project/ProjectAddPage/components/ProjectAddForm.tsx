import {
  Button,
  ControlledFormField,
  Flex,
  FormField,
  Text,
} from '@/components';
import { Autocomplete, styled, Typography } from '@mui/material';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import { ROUTE_PATH } from '@/constants/routePath';
import { usePostProjectMutation } from '@/pages/project/hooks/usePostProjectMutation';
import { useAuthStore } from '@/stores';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { TECH_OPTIONS } from '../../constants/techOptions';
import { ProjectFormValues } from '../../types/project';

export const ProjectAddForm = () => {
  const navigate = useNavigate();
  const methods = useForm<ProjectFormValues>({
    defaultValues: {
      name: '',
      role: '',
      description: '',
      content: '',
      start_date: '',
      end_date: '',
      deployed_link: '',
      github_link: '',
      blog_link: '',
      achievement: '',
      techStack: [],
      thumbnail: undefined,
    },
  });

  const { control, register, handleSubmit } = methods;
  const { user } = useAuthStore();
  const { postProject } = usePostProjectMutation();

  const onSubmit = async (formValues: ProjectFormValues) => {
    try {
      await postProject({
        studentId: user.studentId,
        formValues,
      });

      toast.success('프로젝트가 등록되었습니다!');
      navigate(ROUTE_PATH.project);
    } catch (error) {
      toast.error('등록 중 문제가 발생했어요.');
      console.error(error);
    }
  };

  return (
    <S.Container>
      <Typography variant="body1" color="text.secondary" mb={3}>
        나의 멋진 프로젝트를 공유해봐요!
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
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
              label="한줄 소개"
              placeholder="간단한 요약 문구"
              rules={{ required: '한줄 소개는 필수입니다' }}
              control={control}
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
                    <FormField.Input
                      type="date"
                      {...field}
                      fullWidth
                      required
                    />
                  )}
                />
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
              <FormField.Label label="프로젝트 링크" />
              <Flex.Column width="100%" gap="1rem">
                <FormField.Input
                  {...register('deployed_link')}
                  placeholder="서비스 링크"
                />
                <FormField.Input
                  {...register('github_link')}
                  placeholder="GitHub 링크"
                />
                <FormField.Input
                  {...register('blog_link')}
                  placeholder="블로그 링크"
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
                    value={field.value}
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
              placeholder="예시 - 사용자 수 2배 증가"
              control={control}
              multiline
            />

            <FormField direction="column">
              <FormField.Label label="대표 이미지 업로드" />
              <Controller
                name="thumbnail"
                control={control}
                render={({ field }) => (
                  <input
                    type="file"
                    accept="image/*"
                    onChange={e => field.onChange(e.target.files)}
                  />
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
  Container: styled(Flex.Column)`
    background-color: ${({ theme }) => theme.palette.white};
    border: 1px solid ${({ theme }) => theme.palette.grey200};
    border-radius: 1rem;
    margin: 1rem auto;
    max-width: 1000px;
    padding: 2rem 4rem;
  `,
};
