import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  args: {},
};

export default meta;

type Story = StoryObj<typeof Button>;

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

const colStyle = css({ display: 'flex', flexDirection: 'column', gap: '1rem' });

const buttonWrapper = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

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
    <div css={colStyle}>
      <div css={buttonWrapper}>
        <Button label="버튼" variant={variant} size="small" disabled={disabled} isRound={isRound} />
      </div>
      <div css={buttonWrapper}>
        <Button label="버튼" variant={variant} size="medium" disabled={disabled} isRound={isRound} />
      </div>
      <div css={buttonWrapper}>
        <Button label="버튼" variant={variant} size="large" disabled={disabled} isRound={isRound} />
      </div>
      <div css={buttonWrapper}>
        <Button label="버튼" variant={variant} size="full" disabled={disabled} isRound={isRound} />
      </div>
    </div>
  );
};

const ButtonColor = () => {
  return (
    <div css={colStyle}>
      <div css={buttonWrapper}>
        <Button label="버튼" variant="contained" size="small" color="blue" />
      </div>
      <div css={buttonWrapper}>
        <Button label="버튼" variant="contained" size="small" color="pink" />
      </div>
      <div css={buttonWrapper}>
        <Button label="버튼" variant="contained" size="small" color="purple" />
      </div>
      <div css={buttonWrapper}>
        <Button label="버튼" variant="contained" size="small" color="green" />
      </div>
      <div css={buttonWrapper}>
        <Button label="버튼" variant="contained" size="small" color="yellow" />
      </div>
    </div>
  );
};
