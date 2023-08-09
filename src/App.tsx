import React from 'react';

import Router from 'routes/Router';
import { ToastProvider } from 'context/ToastContext';
import { BrowserRouter } from 'react-router-dom';
import Toast from 'components/Toast/Toast';

const App = () => {
  return (
    <>
      <ToastProvider>
        <BrowserRouter>
          <Router />
          <Toast />
        </BrowserRouter>
      </ToastProvider>
    </>
  );
};

export default App;
