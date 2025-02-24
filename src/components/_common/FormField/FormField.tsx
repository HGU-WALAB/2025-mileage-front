import { AsteriskIcon } from '@/assets';
import { Flex, Input, Text } from '@/components';
import { GetProps } from '@/utils/getProps';
import { styled } from '@mui/material';
import { HTMLAttributes } from 'react';

interface FormFieldProps {
  direction?: 'row' | 'column';
}

interface LabelProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  required?: boolean;
}

const FormFieldWrapper = styled('div')<FormFieldProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
  gap: 0.25rem;
  width: 100%;
`;

const FormField = Object.assign(FormFieldWrapper, {
  Label: ({ label, required = false, ...rest }: LabelProps) => {
    return (
      <Flex.Row gap=".25rem" {...rest}>
        <Text>{label}</Text>
        {required && <AsteriskIcon />}
      </Flex.Row>
    );
  },
  Input: ({ ...rest }: GetProps<typeof Input>) => <Input {...rest} />,
  ErrorMessage: ({
    value,
    ...rest
  }: { value: string } & GetProps<typeof Text>) => (
    <Text
      style={{
        color: 'red',
        height: '1rem',
        marginLeft: '0.25rem',
        fontSize: '0.875rem',
      }}
      {...rest}
    >
      {value}
    </Text>
  ),
  Box: () => <div style={{ height: '1rem' }} />,
});

export default FormField;
