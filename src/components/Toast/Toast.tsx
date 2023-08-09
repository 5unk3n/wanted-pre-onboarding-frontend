import React, { useEffect, useContext } from 'react';
import { createPortal } from 'react-dom';

import { ToastContext } from '../../context/ToastContext';
import * as S from './Toast.styled';

const Toast = () => {
  const { toast, removeToast } = useContext(ToastContext);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        removeToast();
      }, toast.duration);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [toast, removeToast]);

  if (!toast) return null;

  return createPortal(
    <S.ToastWrapper
      onClick={() => {
        removeToast();
      }}
      $type={toast.$type}
    >
      <span>{toast.message}</span>
    </S.ToastWrapper>,
    document.body
  );
};

export default Toast;
