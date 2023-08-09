import React, { ReactNode } from 'react';

import * as S from './Link.styled';

interface LinkProps {
  to: string;
  children: ReactNode;
}

const Link = ({ to, children, ...props }: LinkProps) => {
  return (
    <S.StyledLink to={to} {...props}>
      {children}
    </S.StyledLink>
  );
};

export default Link;
