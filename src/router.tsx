import { ROUTE_PATH } from '@/constants/routePath';
import Home from '@/pages/Home';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: ROUTE_PATH.root,
    element: <Home />,
  },
]);

export default router;
