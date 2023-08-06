import React from 'react';
import { useRoutes } from 'react-router-dom';

import PublicRoute from './PublicRoute';
import ProtectedRoute from './ProtectedRoute';
import Landing from 'pages/Landing/Landing';

const Router = () => {
  const isLoggedIn = localStorage.getItem('token');

  const commonRoutes = [{ path: '/', element: <Landing /> }];

  const routes = isLoggedIn ? ProtectedRoute : PublicRoute;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};

export default Router;
