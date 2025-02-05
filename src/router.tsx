import { ROUTE_PATH } from '@/constants/routePath';
import Components from '@/pages/Components';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: ROUTE_PATH.root,
    element: <Components />,
  },
]);

export default router;
