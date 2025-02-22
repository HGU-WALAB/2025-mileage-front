import { DrawerLayout, Layout } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import {
  AddMileagePage,
  DashboardPage,
  ErrorPage,
  LoginPage,
  MileageListPage,
  MyPage,
  NotFoundPage,
  ScholarshipApplyPage,
} from '@/pages';

import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: (
      // <AuthGuard>
      <DrawerLayout />
      // </AuthGuard>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTE_PATH.dashboard,
        element: <DashboardPage />,
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
        path: ROUTE_PATH.myPage,
        element: <MyPage />,
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
        path: ROUTE_PATH.login,
        element: <LoginPage />,
      },
    ],
  },
]);

export default router;
