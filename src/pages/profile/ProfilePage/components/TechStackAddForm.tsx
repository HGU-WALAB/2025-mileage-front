import { FormField } from '@/components';
import { Autocomplete, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

import { TECH_OPTIONS } from '@project/constants/techOptions';

import { TechStack } from '../../types/profile';

export const TechStackAddForm = () => {
  const { control } = useFormContext<TechStack>();

  return (
    <FormField direction="column">
      <FormField.Label label="사용한 기술 스택" />
      <Controller
        name="techStack"
        control={control}
        render={({ field }) => (
          <Autocomplete
            multiple
            options={TECH_OPTIONS}
            value={field.value ?? []}
            onChange={(_, value) => field.onChange(value)}
            renderInput={params => (
              <TextField {...params} placeholder="기술 스택" />
            )}
          />
        )}
      />
    </FormField>
  );
};
