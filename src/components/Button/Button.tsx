import React, { ButtonHTMLAttributes } from 'react';

import * as S from './Button.styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
}

const Button = ({ type = 'button', children, ...props }: ButtonProps) => {
  return (
    <S.Button type={type} {...props}>
      {children}
    </S.Button>
  );
};

export default Button;
