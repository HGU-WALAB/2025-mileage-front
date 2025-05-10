import { Suspense } from 'react';

const GlobalSuspense = ({ children }: { children: JSX.Element }) => (
  <Suspense fallback={<div style={{ height: '100vh' }}></div>}>
    {children}
  </Suspense>
);

export default GlobalSuspense;
