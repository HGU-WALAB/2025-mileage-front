import GlobalErrorBoundary from '@/components/_common/Error/GlobalErrorBoundary';
import GlobalSuspense from '@/components/_common/Error/GlobalSuspense';
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
