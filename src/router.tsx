import { AuthGuard, DrawerLayout, Layout } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const DashboardPage = React.lazy(() => import('@/pages/DashboardPage'));
const MileageListPage = React.lazy(() => import('@/pages/MileageListPage'));
const AddMileagePage = React.lazy(() => import('@/pages/AddMileagePage'));
const AwardArchivePage = React.lazy(() => import('@/pages/AwardArchivePage'));
const ProjectListPage = React.lazy(() => import('@project/ProjectListPage'));
const ProjectDetailPage = React.lazy(
  () => import('@project/ProjectDetailPage'),
);
const ProjectAddPage = React.lazy(() => import('@project/ProjectAddPage'));
const ProfilePage = React.lazy(() => import('@profile/ProfilePage'));
const LoginPage = React.lazy(() => import('@auth/LoginPage'));
const ErrorPage = React.lazy(() => import('@etc/ErrorPage'));
const NotFoundPage = React.lazy(() => import('@etc/NotFoundPage'));

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
          path: ROUTE_PATH.project,
          element: <ProjectListPage />,
        },
        {
          path: `${ROUTE_PATH.project}/:id`,
          element: <ProjectDetailPage />,
        },
        {
          path: ROUTE_PATH.newProject,
          element: <ProjectAddPage />,
        },
        {
          path: ROUTE_PATH.scholarship,
          element: <ScholarshipApplyPage />,
        },
        {
          path: ROUTE_PATH.profile,
          element: <ProfilePage />,
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
