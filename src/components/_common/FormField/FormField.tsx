import { Asterisk } from '@/assets';
import { Flex, Heading, Input, Text } from '@/components';
import { GetProps } from '@/utils/getProps';
import { styled } from '@mui/material';
import { HTMLAttributes } from 'react';

const FormFieldWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

interface LabelProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  required?: boolean;
}

const FormField = Object.assign(FormFieldWrapper, {
  Label: ({ label, required = false, ...rest }: LabelProps) => {
    return (
      <Flex.Row gap=".25rem">
        <Heading as="h3" {...rest}>
          {label}
        </Heading>
        {required && <Asterisk />}
      </Flex.Row>
    );
  },
  Input: ({ ...rest }: GetProps<typeof Input>) => <Input {...rest} />,
  ErrorMessage: ({
    value,
    ...rest
  }: { value: string } & GetProps<typeof Text>) => (
    <Text style={{ color: 'red', height: '1rem' }} {...rest}>
      {value}
    </Text>
  ),
  Box: () => <div style={{ height: '1rem' }} />,
});

export default FormField;
