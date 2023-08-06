import React from 'react';
import { Navigate } from 'react-router-dom';

import Todo from 'pages/Todo/Todo';

const ProtectedRoute = [
  { path: '/todo', element: <Todo /> },
  { path: '*', element: <Navigate to='/todo' /> },
];

export default ProtectedRoute;
