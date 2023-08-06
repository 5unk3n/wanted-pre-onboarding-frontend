import React, { ButtonHTMLAttributes } from 'react';

import * as S from './Button.styled';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  $size?: 'sm' | 'lg';
}

const Button = ({
  type = 'button',
  $size = 'lg',
  children,
  ...props
}: ButtonProps) => {
  return (
    <S.Button type={type} $size={$size} {...props}>
      {children}
    </S.Button>
  );
};

export default Button;
