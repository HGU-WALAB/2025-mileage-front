import { GlobalErrorFallbackSection } from '@/components';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useLocation } from 'react-router-dom';

const GlobalErrorBoundary = ({ children }: { children: JSX.Element }) => {
  const { reset } = useQueryErrorResetBoundary();

  const location = useLocation();

  useEffect(() => {
    reset();
  }, [location.pathname, reset]);

  return (
    <ErrorBoundary
      onReset={reset}
      FallbackComponent={({ error, resetErrorBoundary }) => (
        <GlobalErrorFallbackSection
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
