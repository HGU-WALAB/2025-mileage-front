import { DrawerLayout, Layout } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import {
  AddMileagePage,
  Components,
  ErrorPage,
  LandingPage,
  MileageListPage,
  NotFoundPage,
  ScholarshipApplyPage,
} from '@/pages';

import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: <DrawerLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTE_PATH.landing,
        element: <LandingPage />,
      },
      {
        path: ROUTE_PATH.mileageList,
        element: <MileageListPage />,
      },
      {
        path: ROUTE_PATH.newMileage,
        element: <AddMileagePage />,
      },
      {
        path: ROUTE_PATH.scholarship,
        element: <ScholarshipApplyPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
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
      {
        path: ROUTE_PATH.landing,
        element: <LandingPage />,
      },
    ],
  },
]);

export default router;
