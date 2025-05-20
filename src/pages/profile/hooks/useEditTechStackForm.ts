import { useForm } from 'react-hook-form';

interface EditTechStackFormValues {
  techStack: string[];
}

export const useEditTechStackForm = (defaultTechStack: string[]) => {
  const methods = useForm<EditTechStackFormValues>({
    defaultValues: {
      techStack: defaultTechStack,
    },
  });

  return { methods };
};
