import { Layout } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import { Components, LandingPage } from '@/pages';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: ROUTE_PATH.root,
        element: <Components />,
      },
      {
        path: ROUTE_PATH.landing,
        element: <LandingPage />,
      },
    ],
  },
]);

export default router;
