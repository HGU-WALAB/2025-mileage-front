import { GlobalErrorBoundary, GlobalSuspense } from '@/components';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';

const ErrorResetBoundary = () => {
  return (
    <QueryErrorResetBoundary>
      <GlobalErrorBoundary>
        <GlobalSuspense>
          <Outlet />
        </GlobalSuspense>
      </GlobalErrorBoundary>
    </QueryErrorResetBoundary>
  );
};

export default ErrorResetBoundary;
