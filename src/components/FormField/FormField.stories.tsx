import Flex from '@/components/Flex/Flex';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import FormField from './FormField';

const meta: Meta<typeof FormField> = {
  title: 'Components/FormField',
  component: FormField,
};

export default meta;

type Story = StoryObj<typeof FormField>;

/** ✅ 리액트 컴포넌트로 분리해서 Hook 사용 */
const DefaultForm = () => {
  const [value, setValue] = useState('');
  return (
    <FormField direction="column">
      <FormField.Label label="이름" required />
      <FormField.Input
        placeholder="이름을 입력하세요"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <FormField.Box />
    </FormField>
  );
};

export const Default: Story = {
  render: () => <DefaultForm />,
};

const WithErrorForm = () => {
  const [value, setValue] = useState('');
  const isError = value.trim() === '';

  return (
    <FormField direction="column">
      <FormField.Label label="이메일" required />
      <FormField.Input
        placeholder="이메일을 입력하세요"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      {isError ? (
        <FormField.ErrorMessage value="이메일은 필수 항목입니다." />
      ) : (
        <FormField.Box />
      )}
    </FormField>
  );
};

export const WithError: Story = {
  render: () => <WithErrorForm />,
};

const RowDirectionForm = () => {
  const [value, setValue] = useState('홍길동');

  return (
    <FormField direction="row">
      <FormField.Label label="이름" />
      <FormField.Input value={value} onChange={e => setValue(e.target.value)} />
    </FormField>
  );
};

export const RowDirection: Story = {
  render: () => <RowDirectionForm />,
};

const RowDirectionWithErrorForm = () => {
  const [value, setValue] = useState('');
  const isError = value.trim() === '';

  return (
    <FormField direction="row">
      <FormField.Label label="이름" />
      <Flex.Column>
        <FormField.Input
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        {isError ? (
          <FormField.ErrorMessage value="이름은 필수 항목입니다." />
        ) : (
          <FormField.Box />
        )}
      </Flex.Column>
    </FormField>
  );
};

export const RowDirectionWithError: Story = {
  render: () => <RowDirectionWithErrorForm />,
};
