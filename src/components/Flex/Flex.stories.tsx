import type { Meta, StoryObj } from '@storybook/react';
import Flex, { Props } from './Flex';

const meta: Meta<typeof Flex> = {
  title: 'Components/Flex',
  component: Flex,
  args: {
    direction: 'row',
    justify: 'center',
    align: 'center',
    gap: '10px',
    width: '100%',
    height: '100px',
  },
};

export default meta;

type Story = StoryObj<typeof Flex>;

export const Default: Story = {
  args: {
    direction: 'row',
    backgroundColor: 'pink',
  },
};

export const FlexRow: Story = {
  render: () => (
    <FlexWrapper direction="row" justify="space-between" align="center" />
  ),
};

export const FlexColumn: Story = {
  render: () => (
    <FlexWrapper direction="column" justify="center" align="stretch" />
  ),
};

export const FlexWrap: Story = {
  render: () => (
    <FlexWrapper
      direction="row"
      justify="center"
      align="center"
      wrap="wrap"
      gap="20px"
    />
  ),
};

export const FlexWithGap: Story = {
  render: () => (
    <FlexWrapper direction="row" justify="center" align="center" gap="30px" />
  ),
};

const FlexWrapper = ({
  direction,
  justify,
  align,
  gap,
  width,
  height,
}: Props) => {
  return (
    <Flex
      direction={direction}
      justify={justify}
      align={align}
      gap={gap}
      width={width}
      height={height}
    >
      <Flex.Row backgroundColor="pink" padding="10px">
        Item 1
      </Flex.Row>
      <Flex.Row backgroundColor="pink" padding="10px">
        Item 2
      </Flex.Row>
      <Flex.Row backgroundColor="pink" padding="10px">
        Item 3
      </Flex.Row>
    </Flex>
  );
};

export const CustomLayout: Story = {
  render: () => (
    <Flex.Column gap="1rem" padding="20px" backgroundColor="lightgray">
      <FlexWrapper
        direction="row"
        justify="flex-start"
        align="center"
        gap="20px"
      />
      <FlexWrapper
        direction="row"
        justify="space-around"
        align="flex-end"
        gap="15px"
      />
    </Flex.Column>
  ),
};
