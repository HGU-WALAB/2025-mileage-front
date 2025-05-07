import { AuthGuard, DrawerLayout, Layout } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const DashboardPage = React.lazy(() => import('@/pages/DashboardPage'));
const MileageListPage = React.lazy(() => import('@/pages/MileageListPage'));
const AddMileagePage = React.lazy(() => import('@/pages/AddMileagePage'));
const AwardArchivePage = React.lazy(() => import('@/pages/AwardArchivePage'));
const ScholarshipApplyPage = React.lazy(
  () => import('@/pages/ScholarshipApplyPage'),
);
const MyPage = React.lazy(() => import('@/pages/MyPage'));
const LoginPage = React.lazy(() => import('@/pages/LoginPage'));
const ErrorPage = React.lazy(() => import('@/pages/ErrorPage'));
const NotFoundPage = React.lazy(() => import('@/pages/NotFoundPage'));

const router = createBrowserRouter(
  [
    {
      element: (
        <AuthGuard>
          <DrawerLayout />
        </AuthGuard>
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
          path: ROUTE_PATH.award,
          element: <AwardArchivePage />,
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
  ],
  {
    basename: '/mileage/',
  },
);

export default router;
