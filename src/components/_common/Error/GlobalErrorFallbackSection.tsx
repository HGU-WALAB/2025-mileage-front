import { AuthErrorFallback, PageErrorFallback } from '@/components';

interface Props {
  error: Error & { response?: { status: number } };
  resetErrorBoundary: () => void;
}

const GlobalErrorFallbackSection = ({ error, resetErrorBoundary }: Props) => {
  if (error.response?.status === 401) {
    return <AuthErrorFallback resetErrorBoundary={resetErrorBoundary} />;
  }

  return (
    <PageErrorFallback error={error} resetErrorBoundary={resetErrorBoundary} />
  );
};

export default GlobalErrorFallbackSection;
