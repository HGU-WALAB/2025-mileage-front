import type { Meta, StoryObj } from '@storybook/react';
import UploadButton from './UploadButton';

const meta: Meta<typeof UploadButton> = {
  title: 'Components/UploadButton',
  component: UploadButton,
  args: {
    label: '파일 업로드',
  },
};

export default meta;

type Story = StoryObj<typeof UploadButton>;

export const Default: Story = {
  render: args => (
    <UploadButton
      {...args}
      onUpload={file => {
        alert(`선택된 파일: ${file.name}`);
      }}
    />
  ),
};
