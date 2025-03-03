import { createRoot } from 'react-dom/client';
import App from './App.tsx';

async function enableMocking() {
  if (import.meta.env.VITE_API_MODE !== 'msw') {
    return;
  }

  const { worker } = await import('./mocks/browser');
  await worker.start({
    serviceWorker: {
      url: '/mockServiceWorker.js',
    },
  });
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    // <StrictMode>
    <App />,
    // </StrictMode>,
  );
});
