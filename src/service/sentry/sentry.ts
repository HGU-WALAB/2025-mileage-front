import * as Sentry from '@sentry/react';
import { useEffect } from 'react';
import {
  createRoutesFromChildren,
  matchRoutes,
  useLocation,
  useNavigationType,
} from 'react-router-dom';

Sentry.init({
  dsn: import.meta.env.SENTRY_DSN_TOKEN,
  release: '1.0.0',
  environment: 'production',
  normalizeDepth: 6,
  integrations: [
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect,
      useLocation,
      useNavigationType,
      createRoutesFromChildren,
      matchRoutes,
    }),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1.0,
  // tracePropagationTargets: ['localhost', `${import.meta.env.VITE_API_URL}`],
});
