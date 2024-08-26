import '../assets/css/app.css';
import { lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';

import { store } from '@st-fly/hooks';
import { ErrorCallback, LayoutApp } from '@st-fly/ui';

const Users = lazy(() => import('@st-fly/users-module'));
const Tasks = lazy(() => import('@st-fly/tasks-module'));
const Reports = lazy(() => import('@st-fly/reports-module'));

const router = createBrowserRouter([
  {
    path: 'app',
    Component: LayoutApp,
    children: [
      {
        path: '',
        Component: Users,
        index: true,
      },
      {
        path: 'tasks',
        Component: Tasks,
      },
      {
        path: 'reports',
        Component: Reports,
      },
    ],
  },
]);

export function App() {

  return (
    <ErrorBoundary fallbackRender={ErrorCallback}>
      <Provider store={store}>
        <RouterProvider
          router={router}
          fallbackElement={null}
          future={{ v7_startTransition: true }}
        />
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
