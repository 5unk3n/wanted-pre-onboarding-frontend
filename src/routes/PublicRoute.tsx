import React from 'react';
import { Navigate } from 'react-router-dom';

import SignIn from 'pages/SignIn/SignIn';
import SignUp from 'pages/SignUp/SignUp';

const PublicRoute = [
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  { path: '*', element: <Navigate to='signin' /> },
];

export default PublicRoute;
