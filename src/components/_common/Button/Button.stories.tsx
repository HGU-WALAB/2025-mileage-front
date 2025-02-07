import { Flex } from '@/components';
import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: {},
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: '버튼',
  },
};

export const Contained: Story = {
  render: () => <ButtonGroup variant={'contained'} disabled={false} />,
};

export const Outlined: Story = {
  render: () => <ButtonGroup variant={'outlined'} disabled={false} />,
};

export const Round: Story = {
  render: () => <ButtonGroup variant={'contained'} isRound={true} disabled={false} />,
};

export const Disabled: Story = {
  render: () => <ButtonGroup variant={'contained'} disabled={true} />,
};

export const Colored: Story = {
  render: () => <ButtonColor />,
};

const ButtonGroup = ({
  variant,
  isRound = false,
  disabled,
}: {
  variant: 'text' | 'outlined' | 'contained';
  isRound?: boolean;
  disabled: boolean;
}) => {
  return (
    <Flex.Column gap="1rem">
      <Flex.Row align="center" justify="center">
        <Button label="버튼" variant={variant} size="small" disabled={disabled} isRound={isRound} />
      </Flex.Row>
      <Flex.Row align="center" justify="center">
        <Button label="버튼" variant={variant} size="medium" disabled={disabled} isRound={isRound} />
      </Flex.Row>
      <Flex.Row align="center" justify="center">
        <Button label="버튼" variant={variant} size="large" disabled={disabled} isRound={isRound} />
      </Flex.Row>
      <Flex.Row align="center" justify="center">
        <Button label="버튼" variant={variant} size="full" disabled={disabled} isRound={isRound} />
      </Flex.Row>
    </Flex.Column>
  );
};

const ButtonColor = () => {
  return (
    <Flex.Column gap="1rem">
      <Flex.Row align="center" justify="center">
        <Button label="버튼" variant="contained" size="small" color="blue" />
      </Flex.Row>
      <Flex.Row align="center" justify="center">
        <Button label="버튼" variant="contained" size="small" color="pink" />
      </Flex.Row>
      <Flex.Row align="center" justify="center">
        <Button label="버튼" variant="contained" size="small" color="purple" />
      </Flex.Row>
      <Flex.Row align="center" justify="center">
        <Button label="버튼" variant="contained" size="small" color="green" />
      </Flex.Row>
      <Flex.Row align="center" justify="center">
        <Button label="버튼" variant="contained" size="small" color="yellow" />
      </Flex.Row>
    </Flex.Column>
  );
};
