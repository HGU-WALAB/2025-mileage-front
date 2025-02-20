import { ErrorFallbackSection } from '@/components';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';

const GlobalErrorBoundary = ({ children }: { children: JSX.Element }) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      onReset={reset}
      FallbackComponent={({ error, resetErrorBoundary }) => (
        <ErrorFallbackSection
          error={error}
          resetErrorBoundary={resetErrorBoundary}
        />
      )}
    >
      {children}
    </ErrorBoundary>
  );
};

export default GlobalErrorBoundary;
