import { Button, Flex } from '@/components';
import { useForm } from 'react-hook-form';

type ProjectFormData = {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
};

export const ProjectAddForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectFormData>();

  const onSubmit = (data: ProjectFormData) => {
    // mutation 요청 보내기
    console.log(data);
  };

  return (
    <Flex.Column margin="1rem" as="form" onSubmit={handleSubmit(onSubmit)}>
      <Flex.Column gap="1.5rem" padding="0 2rem">
        <label>
          제목
          <input {...register('title', { required: '제목은 필수입니다' })} />
          {errors.title && <span>{errors.title.message}</span>}
        </label>

        <label>
          설명
          <textarea {...register('description')} rows={4} />
        </label>

        <label>
          시작일
          <input type="date" {...register('startDate')} />
        </label>

        <label>
          종료일
          <input type="date" {...register('endDate')} />
        </label>

        <Button label="추가" />
      </Flex.Column>
    </Flex.Column>
  );
};
