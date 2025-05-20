import {
  Control,
  Controller,
  Path,
  RegisterOptions,
  useFormContext,
} from 'react-hook-form';
import FormField from './FormField';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ControlledFormField = <T extends Record<string, any>>({
  name,
  label,
  placeholder,
  rules,
  control,
  multiline = false,
  direction = 'column',
}: {
  name: Path<T>;
  label?: string;
  placeholder?: string;
  rules?: RegisterOptions<T, Path<T>>;
  control: Control<T>;
  multiline?: boolean;
  direction?: 'column' | 'row';
}) => {
  const {
    formState: { errors },
  } = useFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <FormField direction={direction}>
          {label && (
            <FormField.Label
              label={label}
              required={!!rules?.required}
              style={{
                minWidth: '150px',
              }}
            />
          )}
          <FormField.Input
            {...field}
            placeholder={placeholder}
            multiline={multiline}
            minRows={multiline ? 4 : undefined}
            fullWidth
          />
          <FormField.ErrorMessage
            value={(errors[name]?.message as string) || ''}
          />
        </FormField>
      )}
    />
  );
};
