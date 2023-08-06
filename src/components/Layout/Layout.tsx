import React from 'react';

import * as S from './Layout.styled';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <S.MainLayout>{children}</S.MainLayout>;
};

export default Layout;
