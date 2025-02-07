import { DrawerLayout, Layout } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import { Components, LandingPage } from '@/pages';
import MileageListPage from '@/pages/MileageListPage';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: <DrawerLayout />,
    children: [
      {
        path: ROUTE_PATH.landing,
        element: <LandingPage />,
      },
      {
        path: ROUTE_PATH.mileageList,
        element: <MileageListPage />,
      },
    ],
  },
  {
    element: <Layout />,
    children: [
      {
        path: ROUTE_PATH.root,
        element: <Components />,
      },
    ],
  },
]);

export default router;
