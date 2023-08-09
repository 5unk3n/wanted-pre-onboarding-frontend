import React, { createContext, useState, ReactNode } from 'react';

import { ToastProps } from 'types';

type ToastType = 'error' | 'success';

interface ToastContextProps {
  toast: ToastProps | null;
  addToast: (message: string, type?: ToastType, duration?: number) => void;
  removeToast: () => void;
}

export const ToastContext = createContext<ToastContextProps>({
  toast: null,
  addToast: () => {},
  removeToast: () => {},
});

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toast, setToast] = useState<ToastProps | null>(null);

  const addToast = (
    message: string,
    type: ToastType = 'error',
    duration: number = 3000
  ) => {
    setToast({ message, $type: type, duration });
  };

  const removeToast = () => {
    setToast(null);
  };

  return (
    <ToastContext.Provider value={{ toast, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};
